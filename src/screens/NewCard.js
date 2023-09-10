import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
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
import { Ionicons } from '@expo/vector-icons'; 
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from "expo-checkbox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function NewCard() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}
        >
          <AppBar
            color={theme.bg}
            title="New Card"
            titleStyle={[style.subtitle, { color: theme.txt }]}
            centerTitle={true}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
                <Ionicons name="arrow-back" color={theme.txt} size={30} />
              </TouchableOpacity>
            }
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 20 }}>
              <Image
                source={require("../../assets/image/Card.png")}
                resizeMode="stretch"
                style={{ width: width - 40, height: height / 4 }}
              ></Image>
            </View>

            <View style={[{ backgroundColor: theme.input, marginTop: 20 }]}>
              <TextInput
                placeholder="Name"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.txtinput,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    fontFamily: "Philosopher-Regular",
                  },
                ]}
              />
            </View>
            <View style={[{ backgroundColor: theme.input, marginTop: 20 }]}>
              <TextInput
                placeholder="Card Number"
                keyboardType="phone-pad"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.txtinput,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    fontFamily: "Philosopher-Regular",
                  },
                ]}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={[
                  { backgroundColor: theme.input, marginTop: 20, flex: 1 },
                ]}
              >
                <TextInput
                  placeholder="Expiry Date"
                  keyboardType="phone-pad"
                  selectionColor={Colors.primary}
                  placeholderTextColor={Colors.disable}
                  style={[
                    style.txtinput,
                    {
                      paddingHorizontal: 10,
                      color: theme.txt,
                      fontFamily: "Philosopher-Regular",
                    },
                  ]}
                />
              </View>
              <View style={{ padding: 10 }}></View>
              <View
                style={[
                  { backgroundColor: theme.input, marginTop: 20, flex: 1 },
                ]}
              >
                <TextInput
                  placeholder="CVV"
                  keyboardType="phone-pad"
                  selectionColor={Colors.primary}
                  placeholderTextColor={Colors.disable}
                  style={[
                    style.txtinput,
                    {
                      paddingHorizontal: 10,
                      color: theme.txt,
                      fontFamily: "Philosopher-Regular",
                    },
                  ]}
                />
              </View>
            </View>

            <View style={{ marginTop: 50, marginBottom: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PaymentMethod")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Add New Card</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
