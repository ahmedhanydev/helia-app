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
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// import  Icon  from 'react-native-vector-icons/Ionicons';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function SelectDate() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
        <AppBar
          color={theme.bg}
          title="Select Date"
          titleStyle={[style.subtitle, { color: theme.txt }]}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate("Hoteldetail")}
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
          <View style={{ paddingTop: 20, alignItems: "center" }}>
            <Image
              source={theme.date}
              style={{
                resizeMode: "stretch",
                height: height / 3,
                width: width / 1.2,
              }}
            />
          </View>
          <View style={{ paddingTop: 20, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={[style.txt, { color: theme.txt }]}>Check in</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[style.txt, { color: theme.txt }]}>Check Out</Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: width / 2.6,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: theme.input,
                paddingVertical: 12,
                borderRadius: 13,
                paddingHorizontal: 10,
              }}
            >
              <Text style={[style.txt, { color: theme.txt }]}>Check in</Text>
              <Ionicons name="calendar-outline" size={20} color={theme.txt} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <MaterialCommunityIcons name="arrow-right-thin" size={25} color={theme.txt} />
            </View>
            <View
              style={{
                width: width / 2.6,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: theme.input,
                paddingVertical: 12,
                borderRadius: 13,
                paddingHorizontal: 10,
              }}
            >
              <Text style={[style.txt, { color: theme.txt }]}>Check Out</Text>
              <Ionicons name="calendar-outline" size={20} color={theme.txt} />
            </View>
          </View>
          <Text style={[style.txt, { color: theme.txt, paddingTop: 20 }]}>
            Guest
          </Text>
          <View style={{ paddingTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: theme.input,
                paddingVertical: 15,
                borderRadius: 15,
                borderColor: Colors.border,
                borderWidth: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor: theme.btn,
                  borderRadius: 8,
                }}
              >
                <MaterialCommunityIcons name="minus" size={18} color={Colors.primary} />
              </View>
              <Text style={[style.subtitle, { color: theme.txt }]}>3</Text>
              <View
                style={{
                  padding: 12,
                  backgroundColor: theme.btn,
                  borderRadius: 8,
                }}
              >
                <MaterialCommunityIcons name="plus" size={18} color={Colors.primary} />
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Text
              style={[style.txt, { color: theme.txt, textAlign: "center" }]}
            >
              Total: $435
            </Text>
          </View>
          <View style={{ marginTop: 10, marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Reservation")}
              style={style.btn}
            >
              <Text style={style.btntxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
