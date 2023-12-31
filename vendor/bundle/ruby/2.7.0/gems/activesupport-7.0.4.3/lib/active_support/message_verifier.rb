# frozen_string_literal: true

require "openssl"
require "base64"
require "active_support/core_ext/object/blank"
require "active_support/security_utils"
require "active_support/messages/metadata"
require "active_support/messages/rotator"

module ActiveSupport
  # +MessageVerifier+ makes it easy to generate and verify messages which are
  # signed to prevent tampering.
  #
  # This is useful for cases like remember-me tokens and auto-unsubscribe links
  # where the session store isn't suitable or available.
  #
  # Remember Me:
  #   cookies[:remember_me] = @verifier.generate([@user.id, 2.weeks.from_now])
  #
  # In the authentication filter:
  #
  #   id, time = @verifier.verify(cookies[:remember_me])
  #   if Time.now < time
  #     self.current_user = User.find(id)
  #   end
  #
  # By default it uses Marshal to serialize the message. If you want to use
  # another serialization method, you can set the serializer in the options
  # hash upon initialization:
  #
  #   @verifier = ActiveSupport::MessageVerifier.new('s3Krit', serializer: YAML)
  #
  # +MessageVerifier+ creates HMAC signatures using SHA1 hash algorithm by default.
  # If you want to use a different hash algorithm, you can change it by providing
  # +:digest+ key as an option while initializing the verifier:
  #
  #   @verifier = ActiveSupport::MessageVerifier.new('s3Krit', digest: 'SHA256')
  #
  # === Confining messages to a specific purpose
  #
  # By default any message can be used throughout your app. But they can also be
  # confined to a specific +:purpose+.
  #
  #   token = @verifier.generate("this is the chair", purpose: :login)
  #
  # Then that same purpose must be passed when verifying to get the data back out:
  #
  #   @verifier.verified(token, purpose: :login)    # => "this is the chair"
  #   @verifier.verified(token, purpose: :shipping) # => nil
  #   @verifier.verified(token)                     # => nil
  #
  #   @verifier.verify(token, purpose: :login)      # => "this is the chair"
  #   @verifier.verify(token, purpose: :shipping)   # => ActiveSupport::MessageVerifier::InvalidSignature
  #   @verifier.verify(token)                       # => ActiveSupport::MessageVerifier::InvalidSignature
  #
  # Likewise, if a message has no purpose it won't be returned when verifying with
  # a specific purpose.
  #
  #   token = @verifier.generate("the conversation is lively")
  #   @verifier.verified(token, purpose: :scare_tactics) # => nil
  #   @verifier.verified(token)                          # => "the conversation is lively"
  #
  #   @verifier.verify(token, purpose: :scare_tactics)   # => ActiveSupport::MessageVerifier::InvalidSignature
  #   @verifier.verify(token)                            # => "the conversation is lively"
  #
  # === Making messages expire
  #
  # By default messages last forever and verifying one year from now will still
  # return the original value. But messages can be set to expire at a given
  # time with +:expires_in+ or +:expires_at+.
  #
  #   @verifier.generate("parcel", expires_in: 1.month)
  #   @verifier.generate("doowad", expires_at: Time.now.end_of_year)
  #
  # Then the messages can be verified and returned up to the expire time.
  # Thereafter, the +verified+ method returns +nil+ while +verify+ raises
  # <tt>ActiveSupport::MessageVerifier::InvalidSignature</tt>.
  #
  # === Rotating keys
  #
  # MessageVerifier also supports rotating out old configurations by falling
  # back to a stack of verifiers. Call +rotate+ to build and add a verifier so
  # either +verified+ or +verify+ will also try verifying with the fallback.
  #
  # By default any rotated verifiers use the values of the primary
  # verifier unless specified otherwise.
  #
  # You'd give your verifier the new defaults:
  #
  #   verifier = ActiveSupport::MessageVerifier.new(@secret, digest: "SHA512", serializer: JSON)
  #
  # Then gradually rotate the old values out by adding them as fallbacks. Any message
  # generated with the old values will then work until the rotation is removed.
  #
  #   verifier.rotate old_secret          # Fallback to an old secret instead of @secret.
  #   verifier.rotate digest: "SHA256"    # Fallback to an old digest instead of SHA512.
  #   verifier.rotate serializer: Marshal # Fallback to an old serializer instead of JSON.
  #
  # Though the above would most likely be combined into one rotation:
  #
  #   verifier.rotate old_secret, digest: "SHA256", serializer: Marshal
  class MessageVerifier
    prepend Messages::Rotator::Verifier

    class InvalidSignature < StandardError; end

    SEPARATOR = "--" # :nodoc:
    SEPARATOR_LENGTH = SEPARATOR.length # :nodoc:

    def initialize(secret, digest: nil, serializer: nil)
      raise ArgumentError, "Secret should not be nil." unless secret
      @secret = secret
      @digest = digest&.to_s || "SHA1"
      @serializer = serializer || Marshal
    end

    # Checks if a signed message could have been generated by signing an object
    # with the +MessageVerifier+'s secret.
    #
    #   verifier = ActiveSupport::MessageVerifier.new 's3Krit'
    #   signed_message = verifier.generate 'a private message'
    #   verifier.valid_message?(signed_message) # => true
    #
    #   tampered_message = signed_message.chop # editing the message invalidates the signature
    #   verifier.valid_message?(tampered_message) # => false
    def valid_message?(signed_message)
      data, digest = get_data_and_digest_from(signed_message)
      digest_matches_data?(digest, data)
    end

    # Decodes the signed message using the +MessageVerifier+'s secret.
    #
    #   verifier = ActiveSupport::MessageVerifier.new 's3Krit'
    #
    #   signed_message = verifier.generate 'a private message'
    #   verifier.verified(signed_message) # => 'a private message'
    #
    # Returns +nil+ if the message was not signed with the same secret.
    #
    #   other_verifier = ActiveSupport::MessageVerifier.new 'd1ff3r3nt-s3Krit'
    #   other_verifier.verified(signed_message) # => nil
    #
    # Returns +nil+ if the message is not Base64-encoded.
    #
    #   invalid_message = "f--46a0120593880c733a53b6dad75b42ddc1c8996d"
    #   verifier.verified(invalid_message) # => nil
    #
    # Raises any error raised while decoding the signed message.
    #
    #   incompatible_message = "test--dad7b06c94abba8d46a15fafaef56c327665d5ff"
    #   verifier.verified(incompatible_message) # => TypeError: incompatible marshal file format
    def verified(signed_message, purpose: nil, **)
      data, digest = get_data_and_digest_from(signed_message)
      if digest_matches_data?(digest, data)
        begin
          message = Messages::Metadata.verify(decode(data), purpose)
          @serializer.load(message) if message
        rescue ArgumentError => argument_error
          return if argument_error.message.include?("invalid base64")
          raise
        end
      end
    end

    # Decodes the signed message using the +MessageVerifier+'s secret.
    #
    #   verifier = ActiveSupport::MessageVerifier.new 's3Krit'
    #   signed_message = verifier.generate 'a private message'
    #
    #   verifier.verify(signed_message) # => 'a private message'
    #
    # Raises +InvalidSignature+ if the message was not signed with the same
    # secret or was not Base64-encoded.
    #
    #   other_verifier = ActiveSupport::MessageVerifier.new 'd1ff3r3nt-s3Krit'
    #   other_verifier.verify(signed_message) # => ActiveSupport::MessageVerifier::InvalidSignature
    def verify(*args, **options)
      verified(*args, **options) || raise(InvalidSignature)
    end

    # Generates a signed message for the provided value.
    #
    # The message is signed with the +MessageVerifier+'s secret.
    # Returns Base64-encoded message joined with the generated signature.
    #
    #   verifier = ActiveSupport::MessageVerifier.new 's3Krit'
    #   verifier.generate 'a private message' # => "BAhJIhRwcml2YXRlLW1lc3NhZ2UGOgZFVA==--e2d724331ebdee96a10fb99b089508d1c72bd772"
    def generate(value, expires_at: nil, expires_in: nil, purpose: nil)
      data = encode(Messages::Metadata.wrap(@serializer.dump(value), expires_at: expires_at, expires_in: expires_in, purpose: purpose))
      "#{data}#{SEPARATOR}#{generate_digest(data)}"
    end

    private
      def encode(data)
        ::Base64.strict_encode64(data)
      end

      def decode(data)
        ::Base64.strict_decode64(data)
      end

      def generate_digest(data)
        OpenSSL::HMAC.hexdigest(@digest, @secret, data)
      end

      def digest_length_in_hex
        # In hexadecimal (AKA base16) it takes 4 bits to represent a character,
        # hence we multiply the digest's length (in bytes) by 8 to get it in
        # bits and divide by 4 to get its number of characters it hex. Well, 8
        # divided by 4 is 2.
        @digest_length_in_hex ||= OpenSSL::Digest.new(@digest).digest_length * 2
      end

      def separator_index_for(signed_message)
        index = signed_message.length - digest_length_in_hex - SEPARATOR_LENGTH
        return if index.negative? || signed_message[index, SEPARATOR_LENGTH] != SEPARATOR

        index
      end

      def get_data_and_digest_from(signed_message)
        return if signed_message.nil? || !signed_message.valid_encoding? || signed_message.empty?

        separator_index = separator_index_for(signed_message)
        return if separator_index.nil?

        data = signed_message[0...separator_index]
        digest = signed_message[separator_index + SEPARATOR_LENGTH..-1]

        [data, digest]
      end

      def digest_matches_data?(digest, data)
        data.present? && digest.present? && ActiveSupport::SecurityUtils.secure_compare(digest, generate_digest(data))
      end
  end
end
