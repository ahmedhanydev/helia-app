import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { AppBar } from "@react-native-material/core";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function Location() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area, { marginTop: 20 }]}>
      <ImageBackground
        source={theme.location}
        resizeMode="stretch"
        style={{ height: height, width: width }}
      >
        <AppBar
          color={theme.bg}
          title="Hotel Location"
          titleStyle={{ color: theme.txt, fontFamily: "Urbanist-Regular" }}
          elevation={0}
          leading={
            <TouchableOpacity
              style={{ marginHorizontal: 20 }}
              onPress={() => navigation.navigate("Hoteldetail")}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.txt}
                size={30}
              />
            </TouchableOpacity>
          }
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
