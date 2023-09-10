import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({item}) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={{ width: width }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{ flex: 2 }}>
                <Image source={item.bg}
                    style={{ width: width, height: height/2 }}
                >
                </Image>
            </View>
            <View style={{flex:1,paddingHorizontal:20}}>
           <View style={{paddingTop:20}}>
            <Text style={[style.title,{textAlign:'center',color:theme.txt}]}>{item.title1}</Text>
            <View style={{paddingTop:15}}>
            <Text style={[style.txt,{textAlign:'center',color:theme.txt2}]}>{item.subtitle}</Text>
            </View>
            </View>
            </View>
        </SafeAreaView>
    )
}