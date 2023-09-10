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
import { Ionicons } from "@expo/vector-icons";
// import Icons from 'react-native-vector-icons/Ionicons'
import { RadioButton } from "react-native-paper";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function Payment() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
        <AppBar
          color={theme.bg}
          title="Payment"
          titleStyle={{ color: theme.txt, fontFamily: "Urbanist-Bold" }}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate("Reservation")}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.txt}
                size={30}
              />
            </TouchableOpacity>
          }
          trailing={
            <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}
            >
              <MaterialCommunityIcons
                name="line-scan"
                color={theme.txt}
                size={20}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[
                style.txt,
                { color: theme.txt, fontFamily: "Urbanist-Bold" },
              ]}
            >
              Payment Methods
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  style.txt,
                  { color: Colors.primary, fontFamily: "Urbanist-Bold" },
                ]}
              >
                Add New Card
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 20 }}>
            <View
              style={[
                style.txtinput,
                {
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={require("../../assets/image/paypal.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 32,
                  width: width / 15,
                }}
              />
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,
                    fontFamily: "Urbanist-Bold",
                    marginHorizontal: 10,
                  },
                ]}
              >
                Paypal
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View
              style={[
                style.txtinput,
                {
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={require("../../assets/image/Google1.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 32,
                  width: width / 15,
                }}
              />
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,
                    fontFamily: "Urbanist-Bold",
                    marginHorizontal: 10,
                  },
                ]}
              >
                Google pay
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View
              style={[
                style.txtinput,
                {
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={theme.apple1}
                style={{
                  resizeMode: "stretch",
                  height: height / 32,
                  width: width / 15,
                }}
              />
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,
                    fontFamily: "Urbanist-Bold",
                    marginHorizontal: 10,
                  },
                ]}
              >
                Apple Pay
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <RadioButton
                  value="third"
                  status={checked === "third" ? "checked" : "unchecked"}
                  onPress={() => setChecked("third")}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 150, paddingBottom: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("NewCard")}
              style={[style.btn]}
            >
              <Text style={[style.btntxt]}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
