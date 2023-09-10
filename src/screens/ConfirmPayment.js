import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Modal,
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

export default function ConfirmPayment() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
        <AppBar
          color={theme.bg}
          title="Payment"
          titleStyle={[style.subtitle, { color: theme.txt }]}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate("PaymentMethod")}
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
              marginTop: 20,
              backgroundColor: theme.input,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/image/Rectangle1.png")}
              resizeMode="stretch"
              style={{ height: height / 10, width: width / 5 }}
            ></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle, { color: theme.txt }]}>
                Royale President
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
                  (4,981 reviews)
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end", flex: 1 }}>
              <Text style={[style.subtitle, { color: Colors.primary }]}>
                $29
              </Text>
              <Text style={[style.subtxt, { color: theme.txt2 }]}>/ night</Text>
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
              backgroundColor: theme.input,
              padding: 20,
              borderRadius: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[style.txt, { color: Colors.disable }]}>
                Check in
              </Text>
              <Text style={[style.txt, { color: theme.txt }]}>
                December 16, 2024
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text style={[style.txt, { color: Colors.disable }]}>
                Check out
              </Text>
              <Text style={[style.txt, { color: theme.txt }]}>
                December 20, 2024
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[style.txt, { color: Colors.disable }]}>Guest</Text>
              <Text style={[style.txt, { color: theme.txt }]}>3</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: theme.input,
              padding: 20,
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[style.txt, { color: Colors.disable }]}>
                5 Nights
              </Text>
              <Text style={[style.txt, { color: theme.txt }]}>$435.00</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text style={[style.txt, { color: Colors.disable }]}>
                Taxes & Fees (10%)
              </Text>
              <Text style={[style.txt, { color: theme.txt }]}>$44.50</Text>
            </View>
            <View style={[style.divider, { marginBottom: 10 }]}></View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[style.txt, { color: Colors.disable }]}>Total</Text>
              <Text style={[style.txt, { color: theme.txt }]}>$479.50</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: theme.input,
              borderRadius: 10,
              padding: 20,
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../assets/image/Iimage.png")}
              resizeMode="stretch"
              style={{ width: width / 8, height: height / 30 }}
            ></Image>
            <View
              style={{ flexDirection: "row", flex: 1, marginHorizontal: 10 }}
            >
              <Text
                style={[
                  style.txt,
                  {
                    color: theme.txt,
                    marginTop: -10,
                    // fontFamily: "Urbanist-Bold",
                    fontSize: 22,
                  },
                ]}
              >
                .... .... .... ....
              </Text>
              <Text
                style={[
                  style.txt,
                  { color: theme.txt, fontFamily: "Urbanist-Bold" },
                ]}
              >
                {" "}
                4679
              </Text>
            </View>
            <Text style={[style.txt, { color: Colors.primary }]}>Change</Text>
          </View>

          <View style={{ marginTop: 50, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={style.btn}
            >
              <Text style={style.btntxt}>Confirm Payment</Text>
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
                marginVertical: 120,
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
                Payment Successfull!
              </Text>
              <Text
                style={[
                  style.txt,
                  { color: theme.txt, marginTop: 10, textAlign: "center" },
                ]}
              >
                Successfully made payment and hotel booking
              </Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("Ticket");
                }}
                style={[style.btn]}
              >
                <Text style={[style.btntxt]}>View Ticket</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  // navigation.navigate('BottomNavigator');
                }}
                style={[
                  style.btn,
                  { backgroundColor: theme.btn, marginTop: 20 },
                ]}
              >
                <Text style={[style.btntxt, { color: theme.skip }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
