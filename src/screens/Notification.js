import { View, Text ,Dimensions,SafeAreaView, TextInput,FlatList, StatusBar,TouchableOpacity,Image,ScrollView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar} from '@react-native-material/core';
// import  Icon  from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons'; 

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Notification() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();
    
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,marginTop:20}]}>
    <View style={[style.main,{backgroundColor:theme.bg}]}>
    <AppBar 
            color={theme.bg}
            title='Notification'
            titleStyle={[style.subtitle,{color:theme.txt}]}
            centerTitle={true}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigator')}>
                <Ionicons name="arrow-back"  
                color={theme.txt} size={30}
                />
                </TouchableOpacity>
            }
            trailing={<TouchableOpacity onPress={()=>navigation.navigate('Bookmark')}>
                <Ionicons name="ellipsis-horizontal-circle"  
                color={theme.txt} size={30}
                /></TouchableOpacity>
            }/>

        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.subtxt,{color:theme.txt}]}>Today</Text>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,paddingVertical:10,paddingHorizontal:10,borderRadius:10,marginTop:10}}>
                <Image source={require('../../assets/image/n1.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6}}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={[style.txt,{color:theme.txt}]}>Payment Successful!</Text>
                    <Text style={[style.subtxt,{width:width/1.5,color:theme.txt2}]}>Laluna Hotel booking was successful!</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,paddingVertical:10,paddingHorizontal:10,borderRadius:10,marginVertical:10}}>
                <Image source={require('../../assets/image/n2.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6}}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={[style.txt,{color:theme.txt}]}>E-Wallet Connected</Text>
                    <Text style={[style.subtxt,{width:width/1.5,color:theme.txt2}]}>E-Wallet has been connected to Helia</Text>
                </View>
            </View>

            <Text style={[style.subtxt,{color:theme.txt}]}>Yesterday</Text>

            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,paddingVertical:10,paddingHorizontal:10,borderRadius:10,marginTop:10}}>
                <Image source={require('../../assets/image/n3.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6}}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={[style.txt,{color:theme.txt}]}>Hotel Booking Canceled</Text>
                    <Text style={[style.subtxt,{width:width/1.5,color:theme.txt2}]}>You have canceled your hotel booking</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,paddingVertical:10,paddingHorizontal:10,borderRadius:10,marginVertical:10}}>
                <Image source={require('../../assets/image/n4.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6}}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={[style.txt,{color:theme.txt}]}>2 step verification successful</Text>
                    <Text style={[style.subtxt,{width:width/1.5,color:theme.txt2}]}>Laluna Hotel booking was successful!</Text>
                </View>
            </View>

            <Text style={[style.subtxt,{color:theme.txt}]}>December 11, 2024</Text>

            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,paddingVertical:10,paddingHorizontal:10,borderRadius:10,marginTop:10}}>
                <Image source={require('../../assets/image/n5.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6}}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={[style.txt,{color:theme.txt}]}>Verification Successful</Text>
                    <Text style={[style.subtxt,{width:width/1.5,color:theme.txt2}]}>Account verification complete</Text>
                </View>
            </View>
        </ScrollView>    
    </View>
    </SafeAreaView>
  )
}