import { View, Text ,
    Image,
    Dimensions,
    SafeAreaView,
    StatusBar
} from 'react-native'
import React,{useState,useContext} from 'react'
import { BallIndicator} from 'react-native-indicators'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash2() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area,{backgroundColor:Colors.primary}]}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
        <View style={{
            flex:2.7,alignItems:'center',justifyContent:'center'
        }}>
            <Image source={require('../../assets/image/logo2.png')}
            style={{resizeMode:'stretch',height:height/5,width:width/5}}
            />
        </View>
        <View style={{
            flex:1,alignItems:'center',justifyContent:'center'
        }}>
            <BallIndicator size={30} color={Colors.secondary}/>
        </View>
    </SafeAreaView>
  )
}