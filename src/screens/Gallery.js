import {
  View,
  Text,
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

// import Icons from 'react-native-vector-icons/Ionicons'
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native-elements";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function Gallery() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
        <AppBar
          color={theme.bg}
          title="Gallery Hotel Photos"
          titleStyle={{ color: theme.txt, fontFamily: "Philosopher-Regular" }}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate("Hoteldetail")}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.txt}
                size={30}
              />
            </TouchableOpacity>
          }
          trailing={
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                color={theme.txt}
                size={30}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Image
                source={require("../../assets/image/Rectangle15.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
              <Image
                source={require("../../assets/image/Rectangle18.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle19.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
              <Image
                source={require("../../assets/image/Rectangle20.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle21.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
              <Image
                source={require("../../assets/image/Rectangle17.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle22.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
              <Image
                source={require("../../assets/image/Rectangle23.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 20,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle24.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
              <Image
                source={require("../../assets/image/Rectangle25.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.35,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
