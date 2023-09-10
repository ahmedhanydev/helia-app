import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { AppBar } from "@react-native-material/core";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OtpInputs from "react-native-otp-inputs";
import Clipboard from "@react-native-clipboard/clipboard";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function Otp() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 20 }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <AppBar
            color={theme.bg}
            title="Otp"
            titleStyle={{ color: theme.txt, fontFamily: "Urbanist-Regular" }}
            // centerTitle={true}
            elevation={0}
            leading={
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  // style={{ backgroundColor: Colors.secondary, }}
                  color={theme.txt}
                  size={30}
                />
              </TouchableOpacity>
            }
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 50 }}>
              <Text
                style={[style.txt, { color: theme.txt2, textAlign: "center" }]}
              >
                Code Has benn send to +111*****99
              </Text>
            </View>
            <View style={{ paddingTop: 20 }}>
              <OtpInputs
                Clipboard={Clipboard}
                numberOfInputs={4}
                selectionColor={Colors.primary}
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
                inputStyles={{
                  borderColor: Colors.primary,
                  backgroundColor: theme.bg,
                  borderRadius: 5,
                  textAlign: "center",
                  height: 50,
                  width: 50,
                  fontSize: 20,
                  borderWidth: 1,
                  color: theme.txt,
                  fontWeight: "bold",
                }}
              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text
                style={[style.txt, { color: theme.txt, textAlign: "center" }]}
              >
                Resend Code in
                <Text style={[style.txt, { color: Colors.primary }]}>
                  {" "}
                  55
                </Text>{" "}
                s
              </Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePass")}
                style={[style.btn]}
              >
                <Text style={[style.btntxt]}>Continue</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
