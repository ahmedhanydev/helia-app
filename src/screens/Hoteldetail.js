import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  TextInput,
  FlatList,
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
import { AppBar, HStack } from "@react-native-material/core";
// import  Icon  from 'react-native-vector-icons/Ionicons';
import { Ionicons } from "@expo/vector-icons";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from "expo-checkbox";

// import Icons from "react-native-vector-icons/FontAwesome5";
// import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
// import Icon2 from "react-native-vector-icons/MaterialIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Hoteldetail() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View>
        <ImageBackground
          source={require("../../assets/image/Rectangle16.png")}
          resizeMode="stretch"
          style={{ width: width, height: height / 3.2 }}
        >
          <AppBar
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              marginTop: 35,
              marginHorizontal: 20,
              justifyContent: "center",
            }}
            elevation={0}
            leading={
              <TouchableOpacity
                onPress={() => navigation.navigate("BottomNavigator")}
              >
                <Ionicons
                  name="arrow-back"
                  color={Colors.secondary}
                  size={30}
                />
              </TouchableOpacity>
            }
            trailing={
              <HStack>
                <Ionicons
                  name="bookmark-outline"
                  color={Colors.secondary}
                  size={25}
                  style={{ marginRight: 10 }}
                />
                <Ionicons
                  name="ellipsis-horizontal-circle"
                  color={Colors.secondary}
                  size={30}
                />
              </HStack>
            }
          />
        </ImageBackground>
      </View>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 10 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[style.subtitle, { fontSize: 23, color: theme.txt }]}>
            Royale President Hotel
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <Ionicons
              name="location-sharp"
              color={Colors.primary}
              size={20}
            ></Ionicons>
            <Text
              style={[style.subtxt, { color: theme.txt2, marginHorizontal: 5 }]}
            >
              79 Place de la Madeleine, Paris, 75009, France{" "}
            </Text>
          </View>

          <View style={[style.divider1]}></View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                style.txt,
                { color: theme.txt, fontFamily: "Urbanist-Bold" },
              ]}
            >
              Gallery Photos
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
              <Text style={[style.subtxt, { color: Colors.primary }]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../../assets/image/Rectangle15.png")}
                    resizeMode="stretch"
                    style={{ height: height / 10, width: width / 3.2 }}
                  ></Image>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                  <Image
                    source={require("../../assets/image/Rectangle18.png")}
                    resizeMode="stretch"
                    style={{ height: height / 10, width: width / 3.2 }}
                  ></Image>
                </View>
                <View>
                  <Image
                    source={require("../../assets/image/Rectangle17.png")}
                    resizeMode="stretch"
                    style={{ height: height / 10, width: width / 3.2 }}
                  ></Image>
                </View>
              </View>
            </ScrollView>
          </View>

          <Text
            style={[
              style.txt,
              { color: theme.txt, fontFamily: "Urbanist-Bold" },
            ]}
          >
            Details
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="hotel"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>Hotels</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="bed"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>
                4 Bedrooms
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="bath"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>
                2 Bathrooms
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Vector.png")}
                resizeMode="stretch"
                style={{ height: height / 40, width: width / 18 }}
              ></Image>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>
                4000 sqft
              </Text>
            </View>
          </View>

          <Text
            style={[
              style.txt,
              {
                color: theme.txt,
                fontFamily: "Urbanist-Bold",
                marginBottom: 5,
              },
            ]}
          >
            Description
          </Text>
          <Text style={[style.subtxt, { color: theme.txt2 }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in cillum
            pariatur.
            <Text style={[style.subtxt, { color: Colors.primary }]}>
              Read more...
            </Text>
          </Text>

          <Text
            style={[
              style.txt,
              {
                color: theme.txt,
                fontFamily: "Urbanist-Bold",
                marginVertical: 10,
              },
            ]}
          >
            Facilites
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="swimmer"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>
                Swimming Pool
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="wifi"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>WiFi</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <MaterialIcons
                name="restaurant-menu"
                size={20}
                color={Colors.primary}
              ></MaterialIcons>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>
                Restaurant
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="car-brake-parking"
                size={25}
                color={Colors.primary}
              ></MaterialCommunityIcons>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>Parking</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="hotel"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text
                style={[
                  style.subtxt,
                  {
                    color: theme.txt2,
                    lineHeight: 14,
                    marginTop: 5,
                    textAlign: "center",
                  },
                ]}
              >
                Meeting {"\n"}Room
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="bed"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text
                style={[
                  style.subtxt,
                  { color: theme.txt2, textAlign: "center" },
                ]}
              >
                Elevator
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="bath"
                size={20}
                color={Colors.primary}
              ></FontAwesome5>
              <Text
                style={[
                  style.subtxt,
                  {
                    color: theme.txt2,
                    lineHeight: 14,
                    marginTop: 5,
                    textAlign: "center",
                  },
                ]}
              >
                Fitness {"\n"}Center
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Vector.png")}
                resizeMode="stretch"
                style={{ height: height / 40, width: width / 18 }}
              ></Image>
              <Text
                style={[
                  style.subtxt,
                  {
                    color: theme.txt2,
                    lineHeight: 14,
                    marginTop: 5,
                    textAlign: "center",
                  },
                ]}
              >
                24-hours {"\n"}Open
              </Text>
            </View>
          </View>

          <Text
            style={[
              style.txt,
              {
                color: theme.txt,
                fontFamily: "Urbanist-Bold",
                marginVertical: 10,
              },
            ]}
          >
            Location
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Location")}>
            <Image
              source={theme.location1}
              resizeMode="stretch"
              style={{ width: width - 40, height: height / 5 }}
            ></Image>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                style.txt,
                {
                  color: theme.txt,
                  fontFamily: "Urbanist-Bold",
                  marginVertical: 10,
                },
              ]}
            >
              Review <Ionicons name="star" color={"#FFD300"}></Ionicons>
              <Text style={[style.subtxt, { color: Colors.primary }]}>
                {" "}
                4.8
              </Text>
              <Text style={[style.subtxt, { color: Colors.disable }]}>
                {" "}
                (4,981 reviews)
              </Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Review")}>
              <Text style={[style.subtxt, { color: Colors.primary }]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: theme.input,
              padding: 15,
              borderRadius: 15,
              marginBottom: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Ellipse.png")}
                resizeMode="stretch"
                style={{ height: height / 18, width: width / 8 }}
              ></Image>
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt, { color: theme.txt }]}>
                  Jenny Wilson
                </Text>
                <Text style={[style.subtxt, { color: Colors.disable }]}>
                  Dec 10, 2024
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 1,
                }}
              >
                <Ionicons name="star" color={Colors.secondary}></Ionicons>
                <Text
                  style={[
                    style.subtxt,
                    { color: Colors.secondary, marginLeft: 5 },
                  ]}
                >
                  5
                </Text>
              </View>
            </View>
            <Text
              style={[
                style.subtxt,
                { color: theme.txt2, marginTop: 5, lineHeight: 18 },
              ]}
            >
              Very nice and comfortable hotel, thank you for accompanying my
              vacation!
            </Text>
          </View>

          <View
            style={{
              backgroundColor: theme.input,
              padding: 15,
              borderRadius: 15,
              marginBottom: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Ellipse1.png")}
                resizeMode="stretch"
                style={{ height: height / 18, width: width / 8 }}
              ></Image>
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt, { color: theme.txt }]}>
                  Guy Hawkins
                </Text>
                <Text style={[style.subtxt, { color: Colors.disable }]}>
                  Dec 10, 2024
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 1,
                }}
              >
                <Ionicons name="star" color={Colors.secondary}></Ionicons>
                <Text
                  style={[
                    style.subtxt,
                    { color: Colors.secondary, marginLeft: 5 },
                  ]}
                >
                  4
                </Text>
              </View>
            </View>
            <Text
              style={[
                style.subtxt,
                { color: theme.txt2, marginTop: 5, lineHeight: 18 },
              ]}
            >
              Very beautiful hotel, my family and I are very satisfied with the
              service!
            </Text>
          </View>

          <View
            style={{
              backgroundColor: theme.input,
              padding: 15,
              borderRadius: 15,
              marginBottom: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Ellipse2.png")}
                resizeMode="stretch"
                style={{ height: height / 18, width: width / 8 }}
              ></Image>
              <View style={{ marginHorizontal: 10, flex: 1 }}>
                <Text style={[style.txt, { color: theme.txt }]}>
                  Kristin Watson
                </Text>
                <Text style={[style.subtxt, { color: Colors.disable }]}>
                  Dec 09, 2024
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 1,
                }}
              >
                <Ionicons name="star" color={Colors.secondary}></Ionicons>
                <Text
                  style={[
                    style.subtxt,
                    { color: Colors.secondary, marginLeft: 5 },
                  ]}
                >
                  5
                </Text>
              </View>
            </View>
            <Text
              style={[
                style.subtxt,
                { color: theme.txt2, marginTop: 5, lineHeight: 18 },
              ]}
            >
              The rooms are very comfortable and the natural views are amazing,
              can't wait to come back again!
            </Text>
          </View>

          <View style={{ marginBottom: 10 }}>
            <TouchableOpacity
              style={[
                style.btn1,
                { backgroundColor: theme.btn, height: 50, borderRadius: 30 },
              ]}
            >
              <Text style={[style.btntxt, { color: theme.skip }]}>More</Text>
              <Ionicons
                name="chevron-down"
                size={20}
                color={theme.skip}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: theme.bg,
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderColor: Colors.border,
          borderWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[style.title, { color: Colors.primary }]}>$29</Text>
            <Text
              style={[style.subtxt, { color: Colors.disable, marginRight: 10 }]}
            >
              / night
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SelectDate")}
            style={[style.btn, { flex: 1 }]}
          >
            <Text style={[style.btntxt]}>Book Now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
