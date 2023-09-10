import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Ionicons from "react-native-vector-icons/Ionicons"

import { Ionicons } from "@expo/vector-icons";
// import Profile from '../screens/Profile';
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
// import Icon from 'react-native-vector-icons/FontAwesome5'
import { FontAwesome5 } from "@expo/vector-icons";

import Hoteldetail from "../screens/Hoteldetail";
import Search from "../screens/Search";
import Home from "../screens/Home";
import Profile2 from "../screens/Profile2";
import BookingCancel from "../screens/BookingCancel";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState("false");

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: {
          position: "absolute",
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: theme.bg,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Regular",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="home-outline"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Regular",
              }}
            >
              Search
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="search"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Booking"
        component={BookingCancel}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Regular",
              }}
            >
              Booking
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="reader-outline"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile2}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Regular",
              }}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="person-outline"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
