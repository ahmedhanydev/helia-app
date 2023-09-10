import { View, Text ,SafeAreaView,Dimensions, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Switch} from 'react-native'
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

export default function BookingCancel() {
  
    const theme = useContext(themeContext);
    const navigation=useNavigation();

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,marginTop:20}]}>
    <View style={[style.main,{backgroundColor:theme.bg}]}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>

        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/image/logo.png')}
            resizeMode='stretch'
            style={{height:height/25,width:width/12}}></Image>
            <Text style={[style.subtitle,{color:theme.txt,marginHorizontal:10}]}>My Booking</Text>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Messagedelete')}>
            <Ionicons name='search' size={25} color={theme.txt}></Ionicons>
        </TouchableOpacity>

    </View>


   
    <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:20}}>
        <View style={{flex:1,borderColor:Colors.primary,backgroundColor:theme.bg,paddingVertical:5,borderWidth:1,borderRadius:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('BookingOngoing')}>
            <Text style={[style.txt,{color:Colors.primary,textAlign:'center'}]}>Ongoing</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{padding:5}}></View>
        <View style={{flex:1,borderColor:Colors.primary,backgroundColor:theme.bg,paddingVertical:5,borderWidth:1,borderRadius:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('BookingCompleted')}>
            <Text style={[style.txt,{color:Colors.primary,textAlign:'center'}]}>Completed</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{padding:5}}></View>
       
        <View style={{flex:1,borderColor:Colors.primary,backgroundColor:Colors.primary,paddingVertical:5,borderWidth:1,borderRadius:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigator')}>
            <Text style={[style.txt,{color:Colors.secondary,textAlign:'center'}]}>Canceled</Text>
        </TouchableOpacity>
        </View>
       
    </View>

    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:60}}>

    <View style={{marginTop:20,backgroundColor:theme.input,padding:20,borderRadius:10}}> 
    <View style={{flexDirection:'row',alignItems:'center',}}>
                <Image source={require('../../assets/image/Rectangle8.png')}
                resizeMode='stretch'
                style={{height:height/10,width:width/4.5}}></Image>
                <View style={{marginHorizontal:10}}>
                    <Text style={[style.subtitle,{color:theme.txt,fontSize:18}]}>Palms Casino Resort</Text>
                    <Text style={[style.txt,{color:theme.txt2}]}>London, United Kingdom</Text>
                    <View style={{backgroundColor:'#f7d7d7',width:width/2.6,borderRadius:5,paddingHorizontal:10,marginTop:7}}>
                        <Text style={[style.subtxt,{color:'#F75555',fontSize:12,fontFamily:'Urbanist-Bold'}]}>Canceled & Refunded</Text>
                    </View>
                </View>
    </View>

    <View style={[style.divider1]}></View>
    <View style={{backgroundColor:'#f7d7d7',borderRadius:10,paddingHorizontal:10,flexDirection:'row',alignItems:'center',paddingVertical:5}}>
        <Ionicons name='ios-alert-circle' size={20} color={'#F75555'}></Ionicons>
        <Text style={[style.subtxt,{color:'#F75555',fontSize:14,marginHorizontal:10}]}>You canceled this hotel booking</Text>
    </View>
    </View>

     <View style={{marginTop:20,backgroundColor:theme.input,padding:20,borderRadius:10}}> 
    <View style={{flexDirection:'row',alignItems:'center',}}>
                <Image source={require('../../assets/image/Rectangle26.png')}
                resizeMode='stretch'
                style={{height:height/10,width:width/4.5}}></Image>
                <View style={{marginHorizontal:10}}>
                    <Text style={[style.subtitle,{color:theme.txt,fontSize:18}]}>The Mark Hotel</Text>
                    <Text style={[style.txt,{color:theme.txt2}]}>Luxemburg, Germany</Text>
                    <View style={{backgroundColor:'#f7d7d7',width:width/2.6,borderRadius:5,paddingHorizontal:10,marginTop:7}}>
                        <Text style={[style.subtxt,{color:'#F75555',fontSize:12,fontFamily:'Urbanist-Bold'}]}>Canceled & Refunded</Text>
                    </View>
                </View>
    </View>

    <View style={[style.divider1]}></View>
    <View style={{backgroundColor:'#f7d7d7',borderRadius:10,paddingHorizontal:10,flexDirection:'row',alignItems:'center',paddingVertical:5}}>
        <Ionicons name='ios-alert-circle' size={20} color={'#F75555'}></Ionicons>
        <Text style={[style.subtxt,{color:'#F75555',fontSize:14,marginHorizontal:10}]}>You canceled this hotel booking</Text>
    </View>
    </View>

     <View style={{marginTop:20,backgroundColor:theme.input,padding:20,borderRadius:10}}> 
    <View style={{flexDirection:'row',alignItems:'center',}}>
                <Image source={require('../../assets/image/Rectangle27.png')}
                resizeMode='stretch'
                style={{height:height/10,width:width/4.5}}></Image>
                <View style={{marginHorizontal:10}}>
                    <Text style={[style.subtitle,{color:theme.txt,fontSize:18}]}>Palazzo Versace Dubai</Text>
                    <Text style={[style.txt,{color:theme.txt2}]}>Dubai, United Arab Emirates</Text>
                    <View style={{backgroundColor:'#f7d7d7',width:width/2.6,borderRadius:5,paddingHorizontal:10,marginTop:7}}>
                        <Text style={[style.subtxt,{color:'#F75555',fontSize:12,fontFamily:'Urbanist-Bold'}]}>Canceled & Refunded</Text>
                    </View>
                </View>
    </View>

    <View style={[style.divider1]}></View>
    <View style={{backgroundColor:'#f7d7d7',borderRadius:10,paddingHorizontal:10,flexDirection:'row',alignItems:'center',paddingVertical:5}}>
        <Ionicons name='ios-alert-circle' size={20} color={'#F75555'}></Ionicons>
        <Text style={[style.subtxt,{color:'#F75555',fontSize:14,marginHorizontal:10}]}>You canceled this hotel booking</Text>
    </View>
    </View>   
    
    </ScrollView>    
    </View>
    </SafeAreaView>
  )
}