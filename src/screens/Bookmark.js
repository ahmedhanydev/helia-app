import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { AppBar, HStack } from "@react-native-material/core";
import { Avatar } from "react-native-paper";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import Icons from 'react-native-vector-icons/Ionicons'
import { Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function Bookmark() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 20 }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title="My Bookmark"
          titleStyle={{ color: theme.txt, fontFamily: "Urbanist-Regular" }}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate("BottomNavigator")}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.txt}
                size={30}
              />
            </TouchableOpacity>
          }
          trailing={
            <HStack>
              <Ionicons
                name="reader-outline"
                color={theme.txt}
                size={25}
                style={{ marginRight: 10 }}
              />
              <Ionicons name="grid" color={Colors.primary} size={25} />
            </HStack>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <RBSheet
                ref={(ref) => {
                  this.RBSheet = ref;
                }}
                height={300}
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
                    Remove From Bookmark ?
                  </Text>
                  <View
                    style={[
                      style.divider,
                      { marginVertical: 10, backgroundColor: "#EEEEEE" },
                    ]}
                  ></View>
                  <View
                    style={{
                      height: 120,
                      backgroundColor: theme.input,
                      borderRadius: 20,
                    }}
                  >
                    <View
                      style={{
                        marginHorizontal: 8,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../../assets/image/Rectangle5.png")}
                        style={{
                          resizeMode: "stretch",
                          height: height / 9,
                          width: width / 4,
                          alignSelf: "center",
                          marginTop: 10,
                        }}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>
                          Palazzo Versace
                        </Text>
                        <Text
                          style={[
                            style.txt,
                            { color: theme.txt2, marginTop: 5 },
                          ]}
                        >
                          Rome, Italia
                        </Text>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                          <Ionicons name="star" size={15} color="#FFD300" />
                          <Text
                            style={[
                              style.subtxt,
                              { color: Colors.primary, marginHorizontal: 3 },
                            ]}
                          >
                            4.8
                          </Text>
                          <Text style={[style.subtxt, { color: theme.txt2 }]}>
                            3,277 reviews
                          </Text>
                        </View>
                      </View>
                      <View style={{ alignItems: "flex-end", flex: 1 }}>
                        <Text
                          style={[
                            style.subtitle,
                            {
                              color: Colors.primary,
                              fontFamily: "Urbanist-Bold",
                            },
                          ]}
                        >
                          $36
                        </Text>
                        <Text
                          style={[
                            style.subtxt,
                            { color: theme.txt2, alignItems: "flex-end" },
                          ]}
                        >
                          / night
                        </Text>

                        <Ionicons
                          name="bookmark"
                          color={Colors.primary}
                          size={20}
                          style={{ marginTop: 5 }}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      marginVertical: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => this.RBSheet.close()}
                      style={[
                        style.btn,
                        { width: width / 2.3, backgroundColor: theme.btn },
                      ]}
                    >
                      <Text style={[style.btntxt, { color: theme.skip }]}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.RBSheet.close()}
                      style={[style.btn, { width: width / 2.3 }]}
                    >
                      <Text style={[style.btntxt]}>Yes, Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </RBSheet>
              <View
                style={{
                  width: width / 2.4,
                  backgroundColor: theme.input,
                  height: 270,
                  borderRadius: 20,
                }}
              >
                <View style={{ paddingHorizontal: 20 }}>
                  <Image
                    source={require("../../assets/image/Rectangle3.png")}
                    style={{
                      resizeMode: "stretch",
                      height: height / 7,
                      width: width / 3,
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={[style.subtitle, { color: theme.txt, marginTop: 5 }]}
                  >
                    President Mila De Hotel
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Ionicons name="star" size={15} color="#FFD300" />
                    <Text
                      style={[
                        style.subtxt,
                        { color: Colors.primary, marginHorizontal: 3 },
                      ]}
                    >
                      4.8
                    </Text>
                    <Text style={[style.subtxt, { color: theme.txt2 }]}>
                      Paris, France
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Text
                        style={[
                          style.subtitle,
                          {
                            color: Colors.primary,
                            fontFamily: "Urbanist-Bold",
                          },
                        ]}
                      >
                        $35
                      </Text>
                      <Text
                        style={[
                          style.subtxt,
                          { color: theme.txt2, alignItems: "flex-end" },
                        ]}
                      >
                        / night
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                      <Ionicons
                        name="bookmark"
                        color={Colors.primary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <View
                style={{
                  width: width / 2.4,
                  backgroundColor: theme.input,
                  height: 270,
                  borderRadius: 20,
                }}
              >
                <View style={{ paddingHorizontal: 20 }}>
                  <Image
                    source={require("../../assets/image/Rectangle5.png")}
                    style={{
                      resizeMode: "stretch",
                      height: height / 7,
                      width: width / 3,
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={[style.subtitle, { color: theme.txt, marginTop: 5 }]}
                  >
                    Palazzo Versace Pico Hotel
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Ionicons name="star" size={15} color="#FFD300" />
                    <Text
                      style={[
                        style.subtxt,
                        { color: Colors.primary, marginHorizontal: 3 },
                      ]}
                    >
                      4.7
                    </Text>
                    <Text style={[style.subtxt, { color: theme.txt2 }]}>
                      Rome, Italia
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Text
                        style={[
                          style.subtitle,
                          {
                            color: Colors.primary,
                            fontFamily: "Urbanist-Bold",
                          },
                        ]}
                      >
                        $36
                      </Text>
                      <Text
                        style={[
                          style.subtxt,
                          { color: theme.txt2, alignItems: "flex-end" },
                        ]}
                      >
                        / night
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                      <Ionicons
                        name="bookmark"
                        color={Colors.primary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <View
                style={{
                  width: width / 2.4,
                  backgroundColor: theme.input,
                  height: 270,
                  borderRadius: 20,
                }}
              >
                <View style={{ paddingHorizontal: 20 }}>
                  <Image
                    source={require("../../assets/image/Rectangle7.png")}
                    style={{
                      resizeMode: "stretch",
                      height: height / 7,
                      width: width / 3,
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={[style.subtitle, { color: theme.txt, marginTop: 5 }]}
                  >
                    Faena Hotel Miami Beach
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Ionicons name="star" size={15} color="#FFD300" />
                    <Text
                      style={[
                        style.subtxt,
                        { color: Colors.primary, marginHorizontal: 3 },
                      ]}
                    >
                      4.9
                    </Text>
                    <Text style={[style.subtxt, { color: theme.txt2 }]}>
                      London, UK
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Text
                        style={[
                          style.subtitle,
                          {
                            color: Colors.primary,
                            fontFamily: "Urbanist-Bold",
                          },
                        ]}
                      >
                        $38
                      </Text>
                      <Text
                        style={[
                          style.subtxt,
                          { color: theme.txt2, alignItems: "flex-end" },
                        ]}
                      >
                        / night
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                      <Ionicons
                        name="bookmark"
                        color={Colors.primary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <View
                style={{
                  width: width / 2.4,
                  backgroundColor: theme.input,
                  height: 270,
                  borderRadius: 20,
                }}
              >
                <View style={{ paddingHorizontal: 20 }}>
                  <Image
                    source={require("../../assets/image/Rectangle8.png")}
                    style={{
                      resizeMode: "stretch",
                      height: height / 7,
                      width: width / 3,
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={[style.subtitle, { color: theme.txt, marginTop: 5 }]}
                  >
                    De Paris Monte-Carlo Hotel
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Ionicons name="star" size={15} color="#FFD300" />
                    <Text
                      style={[
                        style.subtxt,
                        { color: Colors.primary, marginHorizontal: 3 },
                      ]}
                    >
                      4.6
                    </Text>
                    <Text style={[style.subtxt, { color: theme.txt2 }]}>
                      Istanbul, Turkiye
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Text
                        style={[
                          style.subtitle,
                          {
                            color: Colors.primary,
                            fontFamily: "Urbanist-Bold",
                          },
                        ]}
                      >
                        $29
                      </Text>
                      <Text
                        style={[
                          style.subtxt,
                          { color: theme.txt2, alignItems: "flex-end" },
                        ]}
                      >
                        / night
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                      <Ionicons
                        name="bookmark"
                        color={Colors.primary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <View
                style={{
                  width: width / 2.4,
                  backgroundColor: theme.input,
                  height: 270,
                  borderRadius: 20,
                }}
              >
                <View style={{ paddingHorizontal: 20 }}>
                  <Image
                    source={require("../../assets/image/Rectangle9.png")}
                    style={{
                      resizeMode: "stretch",
                      height: height / 7,
                      width: width / 3,
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={[style.subtitle, { color: theme.txt, marginTop: 5 }]}
                  >
                    Grand Resort Lagonissi
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Ionicons name="star" size={15} color="#FFD300" />
                    <Text
                      style={[
                        style.subtxt,
                        { color: Colors.primary, marginHorizontal: 3 },
                      ]}
                    >
                      4.8
                    </Text>
                    <Text style={[style.subtxt, { color: theme.txt2 }]}>
                      Zurich, Swiss
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Text
                        style={[
                          style.subtitle,
                          {
                            color: Colors.primary,
                            fontFamily: "Urbanist-Bold",
                          },
                        ]}
                      >
                        $33
                      </Text>
                      <Text
                        style={[
                          style.subtxt,
                          { color: theme.txt2, alignItems: "flex-end" },
                        ]}
                      >
                        / night
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                      <Ionicons
                        name="bookmark"
                        color={Colors.primary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <View
                style={{
                  width: width / 2.4,
                  backgroundColor: theme.input,
                  height: 270,
                  borderRadius: 20,
                }}
              >
                <View style={{ paddingHorizontal: 20 }}>
                  <Image
                    source={require("../../assets/image/Rectangle10.png")}
                    style={{
                      resizeMode: "stretch",
                      height: height / 7,
                      width: width / 3,
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={[style.subtitle, { color: theme.txt, marginTop: 5 }]}
                  >
                    Martinez Cannes Hotel
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Ionicons name="star" size={15} color="#FFD300" />
                    <Text
                      style={[
                        style.subtxt,
                        { color: Colors.primary, marginHorizontal: 3 },
                      ]}
                    >
                      4.7
                    </Text>
                    <Text style={[style.subtxt, { color: theme.txt2 }]}>
                      Paris, France
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Text
                        style={[
                          style.subtitle,
                          {
                            color: Colors.primary,
                            fontFamily: "Urbanist-Bold",
                          },
                        ]}
                      >
                        $27
                      </Text>
                      <Text
                        style={[
                          style.subtxt,
                          { color: theme.txt2, alignItems: "flex-end" },
                        ]}
                      >
                        / night
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                      <Ionicons
                        name="bookmark"
                        color={Colors.primary}
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
