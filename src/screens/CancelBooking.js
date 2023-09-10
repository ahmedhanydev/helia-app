import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Icons from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function CancelBooking() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title="Cancel Hotel Booking"
          titleStyle={{ color: theme.txt, fontFamily: "Urbanist-Bold" }}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate("BookingOngoing")}
            >
              <Ionicons name="arrow-left" color={theme.txt} size={30} />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[style.txt, { color: theme.txt }]}>
            Please select a payment refund method (only 80% will be refunded).
          </Text>
          <View style={{ paddingTop: 20 }}>
            <View
              style={[
                style.txtinput,
                {
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={require("../../assets/image/paypal.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 32,
                  width: width / 15,
                }}
              />
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,
                    // fontFamily: 'Urbanist-Bold',

                    marginHorizontal: 10,
                  },
                ]}
              >
                Paypal
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View
              style={[
                style.txtinput,
                {
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={require("../../assets/image/Google1.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 32,
                  width: width / 15,
                }}
              />
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,

                    //  fontFamily: 'Urbanist-Bold',

                    marginHorizontal: 10,
                  },
                ]}
              >
                Google pay
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View
              style={[
                style.txtinput,
                {
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={theme.apple1}
                style={{
                  resizeMode: "stretch",
                  height: height / 32,
                  width: width / 15,
                }}
              />
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,

                    //  fontFamily: 'Urbanist-Bold',

                    marginHorizontal: 10,
                  },
                ]}
              >
                Apple Pay
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <RadioButton
                  value="third"
                  status={checked === "third" ? "checked" : "unchecked"}
                  onPress={() => setChecked("third")}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text
              style={[
                style.txt,
                { color: theme.txt, fontFamily: "Urbanist-Bold" },
              ]}
            >
              Pay with Debit/Credit Card
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <View
              style={[
                style.txtinput,
                {
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={require("../../assets/image/Iimage.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 30,
                  width: width / 8,
                }}
              />
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,
                    fontFamily: "Urbanist-Bold",
                    marginHorizontal: 10,
                  },
                ]}
              >
                •••• •••• •••• •••• 4679
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <RadioButton
                  value="fourth"
                  status={checked === "fourth" ? "checked" : "unchecked"}
                  onPress={() => setChecked("fourth")}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 70 }}>
            <Text
              style={[style.txt, { color: theme.txt2, textAlign: "center" }]}
            >
              Paid: $479.5{" "}
              <Text
                style={[
                  style.txt,
                  { color: theme.txt, fontFamily: "Urbanist-Bold" },
                ]}
              >
                {" "}
                Refund: $383.8
              </Text>
            </Text>
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              // onPress={()=>navigation.navigate('')}
              style={[style.btn]}
            >
              <Text style={[style.btntxt]}>Confirm Cancellation</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal transparent={true} visible={visible}>
        <View
          style={{
            // width: width,
            flex: 1,
            backgroundColor: "#000000aa",
            transparent: "true",
          }}
        >
          <View
            style={[
              style.modalcontainer,
              {
                backgroundColor: theme.bg,
                width: width - 60,
                marginVertical: 140,
              },
            ]}
          >
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
              <Image
                source={require("../../assets/image/n1.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 6,
                  width: width / 2.5,
                  alignSelf: "center",
                }}
              />
              <Text
                style={[
                  style.subtitle,
                  { color: Colors.primary, textAlign: "center", marginTop: 20 },
                ]}
              >
                Successfull!
              </Text>
              <Text
                style={[
                  style.txt,
                  { color: theme.txt, marginTop: 10, textAlign: "center" },
                ]}
              >
                You have successfully canceled your order. 80% funds will be
                returned to your account
              </Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("BottomNavigator");
                }}
                style={[style.btn]}
              >
                <Text style={[style.btntxt]}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
