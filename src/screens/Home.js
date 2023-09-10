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
import { AppBar } from "@react-native-material/core";
// import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from "expo-checkbox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Home() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [like1, setLike1] = useState(false);
  const [like2, setLike2] = useState(false);
  const [like3, setLike3] = useState(false);
  const [like4, setLike4] = useState(false);
  const [like5, setLike5] = useState(false);
  const [like6, setLike6] = useState(false);
  const [like7, setLike7] = useState(false);
  const categories = ["Recommended", "Popular", "Trending", "Nearby"];

  const [categoryIndex, setcategoryIndex] = useState(0);

  const Categorylist = () => {
    return (
      <View style={style.categorycontainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setcategoryIndex(index)}
          >
            <Text
              key={index}
              style={[
                style.categoryText,
                categoryIndex == index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 20 }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/image/logo.png")}
              resizeMode="stretch"
              style={{ height: height / 25, width: width / 12 }}
            ></Image>
            <Text
              style={[style.txt, { color: theme.txt, marginHorizontal: 10 }]}
            >
              Helia
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Ionicons
                name="notifications-outline"
                size={25}
                color={theme.txt}
              ></Ionicons>
            </TouchableOpacity>

            <View style={{ margin: 10 }}></View>
            <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
              <Ionicons
                name="bookmark-outline"
                size={25}
                color={theme.txt}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={[
            style.title,
            { paddingHorizontal: 10, color: theme.txt, marginVertical: 20 },
          ]}
        >
          Hello, Daniel 👋
        </Text>

        <View style={[style.inputContainer, { backgroundColor: theme.input }]}>
          <Ionicons name="search" size={20} color={Colors.disable} />
          <TextInput
            placeholder="Search..."
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.disable}
            style={{
              flex: 1,
              color: Colors.active,
              fontFamily: "Philosopher-Regular",
            }}
          />
          <Image
            source={require("../../assets/image/Filter.png")}
            style={{
              width: width / 19,
              height: height / 35,
              alignSelf: "center",
            }}
          ></Image>
        </View>

        <View>
          <ScrollView
            horizontal
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          >
            <Categorylist></Categorylist>
          </ScrollView>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Hoteldetail")}
                  >
                    <ImageBackground
                      source={require("../../assets/image/Rectangle.png")}
                      resizeMode="stretch"
                      style={{ width: width / 1.55, height: height / 2.7 }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          marginRight: 20,
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: Colors.primary,
                            paddingVertical: 3,
                            paddingHorizontal: 10,
                            borderRadius: 20,
                          }}
                        >
                          <Ionicons
                            name="star"
                            size={12}
                            color={Colors.secondary}
                          ></Ionicons>
                          <Text
                            style={[
                              style.subtxt,
                              { color: Colors.secondary, marginHorizontal: 5 },
                            ]}
                          >
                            4.8
                          </Text>
                        </View>
                      </View>
                      <View style={{ flex: 1 }}></View>
                      <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
                        <Text
                          style={[style.subtitle, { color: Colors.secondary }]}
                        >
                          Emeralda De Hotel
                        </Text>
                        <Text
                          style={[style.subtxt, { color: Colors.secondary }]}
                        >
                          Paris, France
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={[
                                style.subtitle,
                                { color: Colors.secondary },
                              ]}
                            >
                              $29
                            </Text>
                            <Text
                              style={[
                                style.subtxt,
                                { color: Colors.secondary },
                              ]}
                            >
                              {" "}
                              / per night
                            </Text>
                          </View>
                          <TouchableOpacity onPress={() => setLike1(!like1)}>
                            <Ionicons
                              name={like1 ? "bookmark" : "bookmark-outline"}
                              size={25}
                              color={Colors.secondary}
                            ></Ionicons>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 20 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Hoteldetail")}
                  >
                    <ImageBackground
                      source={require("../../assets/image/Rectangle1.png")}
                      resizeMode="stretch"
                      style={{ width: width / 1.55, height: height / 2.7 }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          marginRight: 20,
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: Colors.primary,
                            paddingVertical: 3,
                            paddingHorizontal: 10,
                            borderRadius: 20,
                          }}
                        >
                          <Ionicons
                            name="star"
                            size={12}
                            color={Colors.secondary}
                          ></Ionicons>
                          <Text
                            style={[
                              style.subtxt,
                              { color: Colors.secondary, marginHorizontal: 5 },
                            ]}
                          >
                            4.8
                          </Text>
                        </View>
                      </View>
                      <View style={{ flex: 1 }}></View>
                      <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
                        <Text
                          style={[style.subtitle, { color: Colors.secondary }]}
                        >
                          Laluna De Hotel
                        </Text>
                        <Text
                          style={[style.subtxt, { color: Colors.secondary }]}
                        >
                          Istanbul, Turkiye
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={[
                                style.subtitle,
                                { color: Colors.secondary },
                              ]}
                            >
                              $32
                            </Text>
                            <Text
                              style={[
                                style.subtxt,
                                { color: Colors.secondary },
                              ]}
                            >
                              {" "}
                              / per night
                            </Text>
                          </View>
                          <TouchableOpacity onPress={() => setLike2(!like2)}>
                            <Ionicons
                              name={like2 ? "bookmark" : "bookmark-outline"}
                              size={25}
                              color={Colors.secondary}
                            ></Ionicons>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={[style.txt, { color: theme.txt }]}>
              Recently Booked
            </Text>
            <Text style={[style.txt, { color: Colors.primary }]}>See All</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Hoteldetail")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: theme.input,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle2.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.subtitle, { color: theme.txt }]}>
                  President Hotel
                </Text>
                <Text style={[style.txt, { color: theme.txt2 }]}>
                  Paris, France
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="star" size={12} color="#FFD300"></Ionicons>
                  <Text
                    style={[
                      style.subtxt,
                      { color: Colors.primary, marginHorizontal: 5 },
                    ]}
                  >
                    4.8
                  </Text>
                  <Text style={[style.subtxt, { color: Colors.disable }]}>
                    (4,378 reviews)
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <Text style={[style.subtitle, { color: Colors.primary }]}>
                  $35
                </Text>
                <Text style={[style.subtxt, { color: theme.txt2 }]}>
                  / night
                </Text>
                <TouchableOpacity onPress={() => setLike3(!like3)}>
                  <Ionicons
                    name={like3 ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Hoteldetail")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: theme.input,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle3.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.subtitle, { color: theme.txt }]}>
                  Palms Casino
                </Text>
                <Text style={[style.txt, { color: theme.txt2, width: 150 }]}>
                  Amsterdam, Netherlands
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="star" size={12} color="#FFD300"></Ionicons>
                  <Text
                    style={[
                      style.subtxt,
                      { color: Colors.primary, marginHorizontal: 5 },
                    ]}
                  >
                    4.9
                  </Text>
                  <Text style={[style.subtxt, { color: Colors.disable }]}>
                    (5,283 reviews)
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <Text style={[style.subtitle, { color: Colors.primary }]}>
                  $29
                </Text>
                <Text style={[style.subtxt, { color: theme.txt2 }]}>
                  / night
                </Text>
                <TouchableOpacity onPress={() => setLike4(!like4)}>
                  <Ionicons
                    name={like4 ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Hoteldetail")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: theme.input,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle4.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.subtitle, { color: theme.txt }]}>
                  Palazzo Versace
                </Text>
                <Text style={[style.txt, { color: theme.txt2 }]}>
                  Rome, Italia
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="star" size={12} color="#FFD300"></Ionicons>
                  <Text
                    style={[
                      style.subtxt,
                      { color: Colors.primary, marginHorizontal: 5 },
                    ]}
                  >
                    4.7
                  </Text>
                  <Text style={[style.subtxt, { color: Colors.disable }]}>
                    (3,277 reviews)
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <Text style={[style.subtitle, { color: Colors.primary }]}>
                  $36
                </Text>
                <Text style={[style.subtxt, { color: theme.txt2 }]}>
                  / night
                </Text>
                <TouchableOpacity onPress={() => setLike5(!like5)}>
                  <Ionicons
                    name={like5 ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Hoteldetail")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: theme.input,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle5.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.subtitle, { color: theme.txt }]}>
                  Bulgari Resort
                </Text>
                <Text style={[style.txt, { color: theme.txt2 }]}>
                  Istanbul, Turkiye
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="star" size={12} color="#FFD300"></Ionicons>
                  <Text
                    style={[
                      style.subtxt,
                      { color: Colors.primary, marginHorizontal: 5 },
                    ]}
                  >
                    4.8
                  </Text>
                  <Text style={[style.subtxt, { color: Colors.disable }]}>
                    (4,981 reviews)
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <Text style={[style.subtitle, { color: Colors.primary }]}>
                  $27
                </Text>
                <Text style={[style.subtxt, { color: theme.txt2 }]}>
                  / night
                </Text>
                <TouchableOpacity onPress={() => setLike6(!like6)}>
                  <Ionicons
                    name={like6 ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Hoteldetail")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: theme.input,
                padding: 10,
                borderRadius: 10,
                marginBottom: 70,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle6.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.subtitle, { color: theme.txt }]}>
                  Martinez Cannes
                </Text>
                <Text style={[style.txt, { color: theme.txt2, width: 150 }]}>
                  London, United Kingdom
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="star" size={12} color="#FFD300"></Ionicons>
                  <Text
                    style={[
                      style.subtxt,
                      { color: Colors.primary, marginHorizontal: 5 },
                    ]}
                  >
                    4.6
                  </Text>
                  <Text style={[style.subtxt, { color: Colors.disable }]}>
                    (3,672 reviews)
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <Text style={[style.subtitle, { color: Colors.primary }]}>
                  $32
                </Text>
                <Text style={[style.subtxt, { color: theme.txt2 }]}>
                  / night
                </Text>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <Ionicons
                    name={like ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
