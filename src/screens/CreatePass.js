import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
// import Icon from "react-native-vector-icons/Ionicons";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from "expo-checkbox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function CreatePass() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 20 }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title="Create New Password"
          titleStyle={[style.subtitle, { color: theme.txt }]}
          centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Otp")}>
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
          <Image
            source={require("../../assets/image/pass.png")}
            resizeMode="stretch"
            style={{
              height: height / 3.9,
              width: width / 1.8,
              marginVertical: 30,
              alignSelf: "center",
            }}
          ></Image>

          <View style={{ marginTop: 10 }}>
            <Text style={[style.txt, { color: theme.txt }]}>
              Create Your New Password
            </Text>
          </View>
          <View
            style={[style.inputContainer, { backgroundColor: theme.input }]}
          >
            <Ionicons
              name="lock-closed"
              size={25}
              color={Colors.disable}
            ></Ionicons>
            <TextInput
              placeholder="Password"
              secureTextEntry={isPasswordVisible}
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={[
                {
                  paddingHorizontal: 10,
                  color: theme.txt,
                  //   fontFamily: "Urbanist-Regular",
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
            style={[style.inputContainer, { backgroundColor: theme.input }]}
          >
            <Ionicons
              name="lock-closed"
              size={25}
              color={Colors.disable}
            ></Ionicons>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={isPassword}
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={[
                {
                  paddingHorizontal: 10,
                  color: theme.txt,
                  //   fontFamily: "Urbanist-Regular",
                  flex: 1,
                },
              ]}
            />
            <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
              <Ionicons
                name={isPassword ? "eye-off" : "eye"}
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
              //  style={{borderColor:Colors.primary}}
            /> */}
            <View>
              <Text style={[style.subtxt, { lineHeight: 14 }]}>
                Remember me
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={style.btn}
            >
              <Text style={style.btntxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal transparent={true} visible={visible}>
          <View
            style={{
              // width: width,
              flex: 1,
              backgroundColor: "#000000aa",
              transparent: "true",
            }}
          >
            <View
              style={[
                style.modalcontainer,
                { backgroundColor: theme.bg, width: width - 60 },
              ]}
            >
              <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Image
                  source={require("../../assets/image/n1.png")}
                  style={{
                    resizeMode: "stretch",
                    height: height / 6,
                    width: width / 2.5,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={[
                    style.subtitle,
                    {
                      color: Colors.primary,
                      textAlign: "center",
                      marginTop: 20,
                    },
                  ]}
                >
                  Congratulations
                </Text>
                <Text
                  style={[
                    style.txt,
                    { color: theme.txt, marginTop: 10, textAlign: "center" },
                  ]}
                >
                  Your account is ready to use
                </Text>
              </View>
              <View style={{ paddingVertical: 20 }}>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(false);
                    navigation.navigate("BottomNavigator");
                  }}
                  style={[style.btn]}
                >
                  <Text style={[style.btntxt]}>Go to Homepage</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
