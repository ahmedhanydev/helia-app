import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
// import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
// import CheckBox from "@react-native-community/checkbox";

export default function CreateAccount() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);

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
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Letsin")}>
                <Ionicons
                  name="arrow-back"
                  // style={{backgroundColor:Colors.secondary,}}
                  color={theme.txt}
                  size={30}
                />
              </TouchableOpacity>
            }
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginVertical: 20 }}>
              <Text style={[style.title, { color: theme.txt, width: 200 }]}>
                Create your Account
              </Text>
            </View>

            <View
              style={[
                style.inputContainer,
                { marginTop: 40, backgroundColor: theme.input },
              ]}
            >
              <Ionicons name="mail" size={25} color={Colors.primary}></Ionicons>
              <TextInput
                placeholder="Email"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,

                    fontFamily: "Urbanist-Regular",
                  },
                ]}
              />
            </View>

            <View
              style={[style.inputContainer, { backgroundColor: theme.input }]}
            >
              <Ionicons
                name="lock-closed"
                size={25}
                color={Colors.primary}
              ></Ionicons>
              <TextInput
                placeholder="Password"
                selectionColor={Colors.primary}
                secureTextEntry={isPasswordVisible}
                placeholderTextColor={Colors.disable}
                style={[
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    fontFamily: "Urbanist-Regular",
                    flex: 1,
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  color={Colors.disable}
                  size={20}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                paddingLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <CheckBox
                value={isSelected}
                onValueChange={() => setIsSelected(!isSelected)}
                tintColors={{ true: Colors.primary, false: Colors.primary }}
                boxType={"square"}
                onTintColor={Colors.primary}
                onCheckColor={Colors.secondary}
                onFillColor={Colors.primary}
              /> */}
              <View>
                <Text style={[style.subtxt, { lineHeight: 14, marginLeft: 5 }]}>
                  Remember me
                </Text>
              </View>
            </View>

            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginVertical: 50,
              }}
            >
              <View style={[style.divider, { flex: 1 }]}></View>
              <Text
                style={{
                  color: theme.txt3,
                  fontFamily: "Urbanist-Regular",
                  marginHorizontal: 10,
                }}
              >
                or continue with
              </Text>
              <View style={[style.divider, { flex: 1 }]}></View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity style={style.btnoutline}>
                <Image source={require("../../assets/image/Fb.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={style.btnoutline}>
                <Image
                  source={require("../../assets/image/Google.png")}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity style={style.btnoutline}>
                <Image source={theme.apple}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 40,
                marginBottom: 10,
              }}
            >
              <Text style={[style.txt1, { color: theme.txt3 }]}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={[
                    style.txt,
                    { color: Colors.primary, fontWeight: "500" },
                  ]}
                >
                  {" "}
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
