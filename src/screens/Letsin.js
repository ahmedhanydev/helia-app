import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar} from '@react-native-material/core';
// import  Icon  from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons'; 


export default function Letsin() {
 
    const theme = useContext(themeContext);
    const navigation=useNavigation();
   
    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,marginTop:20}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
            <AppBar 
            color={theme.bg}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Ionicons name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginVertical:50}}>
                <Text style={[style.title,{color:theme.txt,textAlign:'center'}]}>Let’s you in</Text>
            </View>

            <View style={{paddingTop:15}}>
            <TouchableOpacity style={[style.btn1,{borderColor:Colors.border,borderWidth:1,backgroundColor:theme.input}]}>
               <Image source={require('../../assets/image/Fb.png')}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Facebook</Text>
            </TouchableOpacity>
           </View>
            <View style={{paddingTop:30,}}>
            <TouchableOpacity style={[style.btn1,{borderColor:Colors.border,borderWidth:1,backgroundColor:theme.input}]}>
               <Image source={require('../../assets/image/Google.png')}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop:15}}>
            <TouchableOpacity style={[style.btn1,{borderColor:Colors.border,borderWidth:1,backgroundColor:theme.input}]}>
               <Image source={theme.apple}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingHorizontal:30,marginVertical:50}}>
              <View style={[style.divider,{flex:1}]}></View>
              <Text style={{color:theme.txt3, fontFamily:'Urbanist-Regular',marginHorizontal:10}}>Or</Text>
              <View style={[style.divider,{flex:1}]}></View>
          </View>

          <View style={{}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} 
            style={style.btn}>
               <Text style={style.btntxt}>Sign in with password</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',justifyContent:'center',paddingTop:40,marginBottom:10}}>
            <Text style={[style.txt1,{color:theme.txt3}]}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')}>
                <Text style={[style.txt,{color:Colors.primary,fontWeight:'500'}]}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}