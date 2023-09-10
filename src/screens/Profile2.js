import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { AppBar } from "@react-native-material/core";
import { Avatar } from "react-native-paper";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EventRegister } from "react-native-event-listeners";
import RBSheet from "react-native-raw-bottom-sheet";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function Profile2() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState("false");
  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 20 }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title="Profile"
          titleStyle={{ color: theme.txt, fontFamily: "Urbanist-Regular" }}
          // centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}
            >
              <Image
                source={require("../../assets/image/logo.png")}
                style={{
                  resizeMode: "stretch",
                  height: height / 25,
                  width: width / 12,
                }}
              />
            </TouchableOpacity>
          }
          trailing={
            <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}
            >
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                color={theme.txt}
                size={30}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 20 }}>
            <Image
              source={theme.user}
              style={{
                resizeMode: "stretch",
                alignSelf: "center",
                height: height / 8,
                width: width / 3.5,
              }}
            />
          </View>
          <View
            style={{
              paddingTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={[style.subtitle, { color: theme.txt }]}>
              Daniel Austin
            </Text>
            <Text style={[style.txt, { color: theme.txt, marginTop: 5 }]}>
              daniel_austin@yourdomain.com
            </Text>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <View style={[style.divider, { backgroundColor: "#EEEEEE" }]} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="account-outline"
                size={25}
                color={theme.txt}
              />
              <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="wallet-outline"
                  size={25}
                  color={theme.txt}
                />
                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>
                  Payment
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification1")}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={25}
                  color={theme.txt}
                />
                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>
                  Notification
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Security")}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={25}
                  color={theme.txt}
                />
                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>
                  Security
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="ios-information-circle-outline"
                  size={25}
                  color={theme.txt}
                />
                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>
                  Help
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="eye-outline"
                size={25}
                color={theme.txt}
              />
              <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>
                Dark Theme
              </Text>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Switch
                  value={darkMode}
                  onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit("ChangeTheme", value);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={() => this.RBSheet1.open()}>
              <RBSheet
                ref={(ref) => {
                  this.RBSheet1 = ref;
                }}
                height={270}
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
                    Logout
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
                        { color: theme.txt, textAlign: "center" },
                      ]}
                    >
                      Are you sure you want to log out?
                    </Text>
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.RBSheet1.close(), navigation.navigate("Login");
                      }}
                      style={[style.btn]}
                    >
                      <Text style={[style.btntxt, { color: Colors.secondary }]}>
                        Yes, Logout
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity
                      onPress={() => this.RBSheet1.close()}
                      style={[style.btn, { backgroundColor: theme.btn }]}
                    >
                      <Text style={[style.btntxt, { color: theme.skip }]}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </RBSheet>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="logout"
                  size={25}
                  color="#F75555"
                />
                <Text style={[style.txt, { color: "#F75555", marginLeft: 10 }]}>
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
