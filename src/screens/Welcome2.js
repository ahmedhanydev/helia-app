import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import { useNavigation } from "@react-navigation/native";

export default function Welcome2() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <StatusBar backgroundColor="transparent" translucent={true} />

      <ImageBackground
        source={require("../../assets/image/welcome2.png")}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1.5 }}></View>
        <View style={{ flex: 0.65, paddingHorizontal: 20 }}>
          <Text
            style={[style.title, { paddingHorizontal: 10, fontWeight: "bold" }]}
          >
            Welcome to 👋
          </Text>
          <View>
            <Text
              style={{
                fontSize: 60,
                fontWeight: "bold",
                color: Colors.primary,
                paddingHorizontal: 10,
              }}
            >
              Helia
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={[style.txt, { lineHeight: 25, paddingHorizontal: 10 }]}
            >
              The best hotel booking in this century to accompany your vacation{" "}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
