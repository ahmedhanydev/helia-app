import { View, Text } from "react-native";
import React from "react";
import StackNavigator from "./src/navigator/StackNavigator";
import { useFonts } from "expo-font";
// import Icon from 'react-native-vector-icons/Ionicons'
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
// import Icon1 from 'react-native-vector-icons/MaterialIcons'

// Icon.loadFont()
// Icons.loadFont()
// Icon1.loadFont()

export default function App() {
  // const [fontLoaded] = useFonts({
  //   Urbanist-Regular: require("./assets/fonts/Philosopher-Bold.ttf"),
  //   InterLight: require("./assets/fonts/Inter-Light.ttf"),
  //   InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  //   InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  //   InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  // });
  // if (!fontLoaded) return null;

  return <StackNavigator />;
}
