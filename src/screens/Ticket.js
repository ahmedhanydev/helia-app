import {
  View, Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Ticket() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
        <AppBar
          color={theme.bg}
          title='Ticket'
          titleStyle={{ color: theme.txt, fontFamily: 'Urbanist-Bold' }}
          elevation={0}
          leading={<TouchableOpacity
          onPress={() => navigation.navigate('ConfirmPayment')}
          >
            <MaterialCommunityIcons name="arrow-left"
              color={theme.txt} size={30}
            />
          </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[style.subtitle, { color: theme.txt, marginVertical: 20 }]}>Royale President Hotel</Text>
            <Image source={require('../../assets/image/QR.png')}
              resizeMode='stretch'
              style={{ height: height / 4, width: width / 1.8, }} />
          </View>
          <View style={[style.divider, { backgroundColor: '#BDBDBD',marginTop:20 }]}></View>
          <View style={{ paddingTop: 20 }}>
            <View style={{flexDirection:'row',}}>
              <View style={{flex:1}}>
                <Text style={[style.subtxt,{color:theme.txt2}]}>Name</Text>
                <Text style={[style.txt,{color:theme.txt,fontFamily: 'Urbanist-Bold',marginTop:5}]}>Daniel Austin</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[style.subtxt,{color:theme.txt2}]}>Phone Numebr</Text>
                <Text style={[style.txt,{color:theme.txt,fontFamily: 'Urbanist-Bold',marginTop:5}]}>+1 111 467 378 399</Text>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View style={{flexDirection:'row',}}>
              <View style={{flex:1}}>
                <Text style={[style.subtxt,{color:theme.txt2}]}>Check in</Text>
                <Text style={[style.txt,{color:theme.txt,fontFamily: 'Urbanist-Bold',marginTop:5}]}>Dec 16, 2024</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[style.subtxt,{color:theme.txt2}]}>Check out</Text>
                <Text style={[style.txt,{color:theme.txt,fontFamily: 'Urbanist-Bold',marginTop:5}]}>Dec 20, 2024</Text>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 ,}}>
            <View style={{flexDirection:'row',}}>
              <View style={{flex:1,}}>
                <Text style={[style.subtxt,{color:theme.txt2}]}>Hotel</Text>
                <Text style={[style.txt,{color:theme.txt,fontFamily: 'Urbanist-Bold',marginTop:5}]}>Royale President</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[style.subtxt,{color:theme.txt2}]}>Guest</Text>
                <Text style={[style.txt,{color:theme.txt,fontFamily: 'Urbanist-Bold',marginTop:5}]}>3</Text>
              </View>
            </View>
          </View>
          <View style={{paddingVertical:30}}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('BottomNavigator')}
                        style={[style.btn]}>
                            <Text style={[style.btntxt]}>Download Ticket</Text>
                        </TouchableOpacity>
                    </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}