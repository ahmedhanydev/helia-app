import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
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
import RBSheet from "react-native-raw-bottom-sheet";
// import CheckBox from 'react-native-just-checkbox'
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from "expo-checkbox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Search() {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [isSelected5, setIsSelected5] = useState(false);
  const [isSelected6, setIsSelected6] = useState(false);
  const [isSelected7, setIsSelected7] = useState(false);
  const [isSelected8, setIsSelected8] = useState(false);

  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [like1, setLike1] = useState(false);
  const [like2, setLike2] = useState(false);
  const [like3, setLike3] = useState(false);
  const categories = [
    "All Hotel",
    "Recommended",
    "Popular",
    "Trending",
    "Nearby",
  ];
  const [categoryIndex, setcategoryIndex] = useState(0);

  const categories1 = ["France", "Italia", "Turkiye", "Germany"];
  const [categoryIndex1, setcategoryIndex1] = useState(0);

  const categories2 = [
    "Highest Popularity",
    "Highest Price",
    "Lowest Price",
    "Review Score",
    "Trending",
  ];
  const [categoryIndex2, setcategoryIndex2] = useState(0);

  const categories3 = ["5", "4", "3", "2", "1"];
  const [categoryIndex3, setcategoryIndex3] = useState(0);

  const Categorylist = () => {
    return (
      <View
        style={[style.categorycontainer, { marginBottom: 10, marginTop: 10 }]}
      >
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

  const Categorylist1 = () => {
    return (
      <View
        style={[style.categorycontainer, { marginBottom: 10, marginTop: 10 }]}
      >
        {categories1.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setcategoryIndex1(index)}
          >
            <Text
              key={index}
              style={[
                style.categoryText,
                categoryIndex1 == index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Categorylist2 = () => {
    return (
      <View
        style={[style.categorycontainer, { marginBottom: 10, marginTop: 10 }]}
      >
        {categories2.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setcategoryIndex2(index)}
          >
            <Text
              key={index}
              style={[
                style.categoryText,
                categoryIndex2 == index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Categorylist3 = () => {
    return (
      <View
        style={[style.categorycontainer, { marginBottom: 10, marginTop: 10 }]}
      >
        {categories3.map((item, index) => (
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            key={index}
            activeOpacity={0.8}
            onPress={() => setcategoryIndex3(index)}
          >
            <View
              style={[
                style.categoryText,
                categoryIndex3 == index && style.categoryTextSelected,
                { flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Ionicons
                name="star"
                style={[
                  style.ctext,
                  categoryIndex3 == index && style.cts,
                  { marginHorizontal: 5 },
                ]}
              />

              <Text
                key={index}
                style={[style.ctext, categoryIndex3 == index && style.cts]}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 20 }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <View
            style={[
              style.inputContainer,
              { backgroundColor: theme.input, marginTop: 30 },
            ]}
          >
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
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <RBSheet
                ref={(ref) => {
                  this.RBSheet = ref;
                }}
                height={600}
                openDuration={100}
                customStyles={{
                  container: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: theme.bg,
                  },
                }}
              >
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                  <Text
                    style={[
                      style.subtitle,
                      { textAlign: "center", color: theme.txt },
                    ]}
                  >
                    Filter Hotel
                  </Text>
                  <View
                    style={[
                      style.divider,
                      { marginVertical: 10, backgroundColor: "#EEEEEE" },
                    ]}
                  />
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={[
                          style.txt,
                          {
                            color: theme.txt,

                            // fontFamily: "Urbanist-Bold"
                          },
                        ]}
                      >
                        Country
                      </Text>
                      <TouchableOpacity>
                        <Text
                          style={[
                            style.txt,
                            {
                              color: Colors.primary,
                              fontFamily: "Urbanist-Bold",
                            },
                          ]}
                        >
                          See All
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <ScrollView
                        horizontal
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <Categorylist1 />
                      </ScrollView>
                    </View>
                    <Text
                      style={[
                        style.txt,
                        { color: theme.txt, fontFamily: "Urbanist-Bold" },
                      ]}
                    >
                      Sort Results
                    </Text>
                    <View>
                      <ScrollView
                        horizontal
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <Categorylist2 />
                      </ScrollView>
                    </View>
                    <Text
                      style={[
                        style.txt,
                        { color: theme.txt, fontFamily: "Urbanist-Bold" },
                      ]}
                    >
                      Price Range Per Night
                    </Text>
                    <View style={{ marginVertical: 10 }}>
                      <Image
                        source={theme.bar}
                        style={{
                          resizeMode: "stretch",
                          height: height / 17,
                          width: width / 1.1,
                        }}
                      />
                    </View>
                    <Text
                      style={[
                        style.txt,
                        { color: theme.txt, fontFamily: "Urbanist-Bold" },
                      ]}
                    >
                      Star Rating
                    </Text>
                    <View>
                      <ScrollView
                        horizontal
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <Categorylist3 />
                      </ScrollView>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={[
                          style.txt,
                          { color: theme.txt, fontFamily: "Urbanist-Bold" },
                        ]}
                      >
                        Facilities
                      </Text>
                      <TouchableOpacity>
                        <Text
                          style={[
                            style.txt,
                            {
                              color: Colors.primary,
                              fontFamily: "Urbanist-Bold",
                            },
                          ]}
                        >
                          See All
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                      <ScrollView
                        horizontal
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected(!isSelected)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            WIFI
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected1}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected1(!isSelected1)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            style={{ marginLeft: 10 }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Swimming Pool
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected2}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected2(!isSelected2)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            style={{ marginLeft: 10 }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Parking
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected3}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected3(!isSelected3)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            style={{ marginLeft: 10 }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Restaurant
                          </Text>
                        </View>
                      </ScrollView>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={[
                          style.txt,
                          { color: theme.txt, fontFamily: "Urbanist-Bold" },
                        ]}
                      >
                        Accommodation Type
                      </Text>
                      <TouchableOpacity>
                        <Text
                          style={[
                            style.txt,
                            {
                              color: Colors.primary,
                              fontFamily: "Urbanist-Bold",
                            },
                          ]}
                        >
                          See All
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                      <ScrollView
                        horizontal
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected4}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected4(!isSelected4)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Hotels
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected5}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected5(!isSelected5)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            style={{ marginLeft: 10 }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Resorts
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected6}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected6(!isSelected6)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            style={{ marginLeft: 10 }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Villas
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected7}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected7(!isSelected7)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            style={{ marginLeft: 10 }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Apartments
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 5,
                          }}
                        >
                          {/* <CheckBox
                            value={isSelected8}
                            boxType={"square"}
                            onCheckColor={Colors.secondary}
                            onFillColor={Colors.primary}
                            onValueChange={() => setIsSelected8(!isSelected8)}
                            tintColors={{
                              true: Colors.primary,
                              false: Colors.primary,
                            }}
                            style={{ marginLeft: 10 }}
                            onTintColor={Colors.primary}
                          /> */}
                          <Text
                            style={[
                              style.subtxt,
                              {
                                color: theme.txt,
                                fontFamily: "Urbanist-Bold",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            Homestays
                          </Text>
                        </View>
                      </ScrollView>
                    </View>
                    <View
                      style={[
                        style.divider,
                        { marginVertical: 10, backgroundColor: "#EEEEEE" },
                      ]}
                    ></View>
                    <View
                      style={{
                        marginTop: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 70,
                      }}
                    >
                      <TouchableOpacity
                        // onPress={()=>navigation.navigate('')}
                        style={[
                          style.btn,
                          { width: width / 2.3, backgroundColor: theme.btn },
                        ]}
                      >
                        <Text style={[style.btntxt, { color: theme.skip }]}>
                          Reset
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.RBSheet.close(),
                            navigation.navigate("SearchFilter");
                        }}
                        style={[style.btn, { width: width / 2.3 }]}
                      >
                        <Text style={[style.btntxt]}>Apply Filter</Text>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </RBSheet>

              <Image
                source={require("../../assets/image/Filter.png")}
                style={{
                  width: width / 19,
                  height: height / 35,
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
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

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[style.txt, { color: theme.txt }]}>
              Recommended (586,379)
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="reader"
                size={25}
                color={Colors.primary}
                style={{ marginHorizontal: 10 }}
              ></Ionicons>
              <Ionicons
                name="grid-outline"
                size={25}
                color={Colors.primary}
              ></Ionicons>
            </View>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 30 }}
          >
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
                  Le Bristol Hotel
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
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <Ionicons
                    name={like ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>

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
                source={require("../../assets/image/Rectangle11.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.subtitle, { color: theme.txt }]}>
                  Maison Souquet
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
                <TouchableOpacity onPress={() => setLike1(!like1)}>
                  <Ionicons
                    name={like1 ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>

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
                  Le Meurice Hotel
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
                <TouchableOpacity onPress={() => setLike2(!like2)}>
                  <Ionicons
                    name={like2 ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: theme.input,
                padding: 10,
                borderRadius: 10,
                marginBottom: 50,
              }}
            >
              <Image
                source={require("../../assets/image/Rectangle6.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[style.subtitle, { color: theme.txt }]}>
                  Plaza Athenee
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
                    4.8
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
                <TouchableOpacity onPress={() => setLike3(!like3)}>
                  <Ionicons
                    name={like3 ? "bookmark" : "bookmark-outline"}
                    size={25}
                    color={Colors.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
