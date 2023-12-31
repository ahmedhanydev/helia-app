# frozen-string-literal: true
module Nanaimo
  module Unicode
    QUOTE_MAP = {
      "\a" => "\\a",
      "\b" => "\\b",
      "\f" => "\\f",
      "\r" => "\\r",
      "\t" => "\\t",
      "\v" => "\\v",
      "\n" => "\\n",
      "\"" => "\\\"",
      "\\" => "\\\\",
      "\x00" => "\\U0000",
      "\x01" => "\\U0001",
      "\x02" => "\\U0002",
      "\x03" => "\\U0003",
      "\x04" => "\\U0004",
      "\x05" => "\\U0005",
      "\x06" => "\\U0006",
      "\x0E" => "\\U000e",
      "\x0F" => "\\U000f",
      "\x10" => "\\U0010",
      "\x11" => "\\U0011",
      "\x12" => "\\U0012",
      "\x13" => "\\U0013",
      "\x14" => "\\U0014",
      "\x15" => "\\U0015",
      "\x16" => "\\U0016",
      "\x17" => "\\U0017",
      "\x18" => "\\U0018",
      "\x19" => "\\U0019",
      "\x1A" => "\\U001a",
      "\e" => "\\U001b",
      "\x1C" => "\\U001c",
      "\x1D" => "\\U001d",
      "\x1E" => "\\U001e",
      "\x1F" => "\\U001f",
    }.freeze

    UNQUOTE_MAP = {
      "\n" => "\n",
      "a" => "\a",
      "b" => "\b",
      "f" => "\f",
      "r" => "\r",
      "t" => "\t",
      "v" => "\v",
      "n" => "\n",
      "'" => "'",
      "\"" => "\"",
      "\\" => "\\",
    }.freeze

    QUOTE_REGEXP = /\x07|\x08|\f|\r|\t|\v|\n|"|\\|\x00|\x01|\x02|\x03|\x04|\x05|\x06|\x0E|\x0F|\x10|\x11|\x12|\x13|\x14|\x15|\x16|\x17|\x18|\x19|\x1A|\x1B|\x1C|\x1D|\x1E|\x1F/
  end
end
