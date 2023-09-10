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
// import Icons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RBSheet from "react-native-raw-bottom-sheet";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function BookingOngoing() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

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
              style={[
                style.subtitle,
                { color: theme.txt, marginHorizontal: 10 },
              ]}
            >
              My Booking
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Messagedelete")}
          >
            <Ionicons name="search" size={25} color={theme.txt}></Ionicons>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              borderColor: Colors.primary,
              backgroundColor: Colors.primary,
              paddingVertical: 5,
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("BookingOngoing")}
            >
              <Text
                style={[
                  style.txt,
                  { color: Colors.secondary, textAlign: "center" },
                ]}
              >
                Ongoing
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5 }}></View>
          <View
            style={{
              flex: 1,
              borderColor: Colors.primary,
              backgroundColor: Colors.bg,
              paddingVertical: 5,
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("BookingCompleted")}
            >
              <Text
                style={[
                  style.txt,
                  { color: Colors.primary, textAlign: "center" },
                ]}
              >
                Completed
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5 }}></View>
          <View
            style={{
              flex: 1,
              borderColor: Colors.primary,
              backgroundColor: theme.bg,
              paddingVertical: 5,
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("BottomNavigator")}
            >
              <Text
                style={[
                  style.txt,
                  { color: Colors.primary, textAlign: "center" },
                ]}
              >
                Canceled
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 20,
              backgroundColor: theme.input,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Rectangle1.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 4.5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}
                >
                  Royale President Hotel
                </Text>
                <Text style={[style.txt, { color: theme.txt2 }]}>
                  Paris, France
                </Text>
                <View
                  style={{
                    backgroundColor: "#ddf0e5",
                    width: width / 8,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginTop: 7,
                  }}
                >
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: "#1AB65C",
                        fontSize: 12,
                        fontFamily: "Urbanist-Bold",
                      },
                    ]}
                  >
                    Paid
                  </Text>
                </View>
              </View>
            </View>

            <View style={[style.divider1]}></View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.RBSheet.open()}
                style={{
                  flex: 1,
                  backgroundColor: theme.bg,
                  borderRadius: 20,
                  paddingVertical: 4,
                  borderWidth: 1,
                  borderColor: Colors.primary,
                }}
              >
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
                        { textAlign: "center", color: "#F75555" },
                      ]}
                    >
                      Cancel Booking
                    </Text>
                    <View
                      style={[
                        style.divider,
                        { marginVertical: 10, backgroundColor: "#EEEEEE" },
                      ]}
                    ></View>
                    <View style={{ paddingTop: 20 }}>
                      <Text
                        style={[
                          style.txt,
                          {
                            color: theme.txt,
                            textAlign: "center",
                            fontFamily: "Urbanist-Bold",
                          },
                        ]}
                      >
                        Are you sure you want to cancel your hotel booking?
                      </Text>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                      <Text
                        style={[
                          style.txt,
                          { color: theme.txt, textAlign: "center" },
                        ]}
                      >
                        Only 80% of the money you can refund from your payment
                        according to our policy
                      </Text>
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
                        onPress={() => {
                          this.RBSheet.close(),
                            navigation.navigate("CancelBooking");
                        }}
                        style={[style.btn, { width: width / 2.3 }]}
                      >
                        <Text style={[style.btntxt]}>Yes, Continue</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </RBSheet>
                <View>
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: "#1AB65C",
                        fontSize: 14,
                        marginHorizontal: 10,
                        textAlign: "center",
                      },
                    ]}
                  >
                    Cancel Booking
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{ padding: 5 }}></View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: Colors.primary,
                  borderRadius: 20,
                  paddingVertical: 5,
                }}
              >
                <View>
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: Colors.secondary,
                        fontSize: 14,
                        marginHorizontal: 10,
                        textAlign: "center",
                      },
                    ]}
                  >
                    View Ticket
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              backgroundColor: theme.input,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Rectangle10.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 4.5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}
                >
                  Monte-Carlo Hotel
                </Text>
                <Text style={[style.txt, { color: theme.txt2 }]}>
                  Rome, Italia
                </Text>
                <View
                  style={{
                    backgroundColor: "#ddf0e5",
                    width: width / 8,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginTop: 7,
                  }}
                >
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: "#1AB65C",
                        fontSize: 12,
                        fontFamily: "Urbanist-Bold",
                      },
                    ]}
                  >
                    Paid
                  </Text>
                </View>
              </View>
            </View>

            <View style={[style.divider1]}></View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.RBSheet.open()}
                style={{
                  flex: 1,
                  backgroundColor: theme.bg,
                  borderRadius: 20,
                  paddingVertical: 4,
                  borderWidth: 1,
                  borderColor: Colors.primary,
                }}
              >
                <View>
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: "#1AB65C",
                        fontSize: 14,
                        marginHorizontal: 10,
                        textAlign: "center",
                      },
                    ]}
                  >
                    Cancel Booking
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{ padding: 5 }}></View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: Colors.primary,
                  borderRadius: 20,
                  paddingVertical: 5,
                }}
              >
                <View>
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: Colors.secondary,
                        fontSize: 14,
                        marginHorizontal: 10,
                        textAlign: "center",
                      },
                    ]}
                  >
                    View Ticket
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              backgroundColor: theme.input,
              padding: 20,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Rectangle6.png")}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 4.5 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}
                >
                  Lagonissi Royal Villa
                </Text>
                <Text style={[style.txt, { color: theme.txt2 }]}>
                  London, United Kingdom
                </Text>
                <View
                  style={{
                    backgroundColor: "#ddf0e5",
                    width: width / 8,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginTop: 7,
                  }}
                >
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: "#1AB65C",
                        fontSize: 12,
                        fontFamily: "Urbanist-Bold",
                      },
                    ]}
                  >
                    Paid
                  </Text>
                </View>
              </View>
            </View>

            <View style={[style.divider1]}></View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.RBSheet.open()}
                style={{
                  flex: 1,
                  backgroundColor: theme.bg,
                  borderRadius: 20,
                  paddingVertical: 4,
                  borderWidth: 1,
                  borderColor: Colors.primary,
                }}
              >
                <View>
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: "#1AB65C",
                        fontSize: 14,
                        marginHorizontal: 10,
                        textAlign: "center",
                      },
                    ]}
                  >
                    Cancel Booking
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{ padding: 5 }}></View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: Colors.primary,
                  borderRadius: 20,
                  paddingVertical: 5,
                }}
              >
                <View>
                  <Text
                    style={[
                      style.subtxt,
                      {
                        color: Colors.secondary,
                        fontSize: 14,
                        marginHorizontal: 10,
                        textAlign: "center",
                      },
                    ]}
                  >
                    View Ticket
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
