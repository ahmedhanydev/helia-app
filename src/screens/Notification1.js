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
  Switch,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
// import  Icon  from 'react-native-vector-icons/Ionicons';
import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Notification1() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [ison, setIsOn] = useState(false);
  const toggle = () => setIsOn((previousState) => !previousState);

  const [ison1, setIsOn1] = useState(true);
  const toggle1 = () => setIsOn1((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isoff, setIsOff] = useState(false);
  const toggle2 = () => setIsOff((previousState) => !previousState);

  const [isoff1, setIsOff1] = useState(false);
  const toggle3 = () => setIsOff1((previousState) => !previousState);

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 20 }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title="Notification"
          titleStyle={[style.subtitle, { color: theme.txt }]}
          centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate("BottomNavigator")}
            >
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={[style.txt, { color: theme.txt2 }]}>
              General Notification
            </Text>
            <Switch
              trackColor={{ false: Colors.disable, true: Colors.primary }}
              thumbColor={isEnabled ? Colors.secondary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={[style.txt, { color: theme.txt2 }]}>Sound</Text>
            <Switch
              trackColor={{ false: Colors.disable, true: Colors.primary }}
              thumbColor={ison ? Colors.secondary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggle}
              value={ison}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={[style.txt, { color: theme.txt2 }]}>Vibrate</Text>
            <Switch
              trackColor={{ false: Colors.disable, true: Colors.primary }}
              thumbColor={ison1 ? Colors.secondary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggle1}
              value={ison1}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={[style.txt, { color: theme.txt2 }]}>App Updates</Text>
            <Switch
              trackColor={{ false: Colors.disable, true: Colors.primary }}
              thumbColor={isEnabled1 ? Colors.secondary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={[style.txt, { color: theme.txt2 }]}>
              New Service Available
            </Text>
            <Switch
              trackColor={{ false: Colors.disable, true: Colors.primary }}
              thumbColor={isoff ? Colors.secondary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggle2}
              value={isoff}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={[style.txt, { color: theme.txt2 }]}>
              New tips available
            </Text>
            <Switch
              trackColor={{ false: Colors.disable, true: Colors.primary }}
              thumbColor={isoff1 ? Colors.secondary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggle3}
              value={isoff1}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
