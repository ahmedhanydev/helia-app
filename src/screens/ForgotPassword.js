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
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function ForgotPassword() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg ,marginTop:20}]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <View style={[style.main, { backgroundColor: theme.bg }]}>
                    <AppBar
                        color={theme.bg}
                        title='Forgot Password'
                        titleStyle={{ color: theme.txt, fontFamily: 'Urbanist-Regular' }}
                        // centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        >
                            <MaterialCommunityIcons name="arrow-left"
                                // style={{ backgroundColor: Colors.secondary, }}
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingTop: 20 }}>
                            <Image source={require('../../assets/image/lock.png')}
                                style={{
                                    resizeMode: 'stretch',
                                    alignSelf: 'center',
                                    height: height / 4,
                                    width: width / 1.5
                                }}
                            />
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={[style.txt, { color: theme.txt }]}>Select which contact details should we use to reset your password</Text>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <View style={[style.txtinput,
                            {
                                borderColor: Colors.primary,
                                height: 90,
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor:theme.input
                            }]}>
                                <Image source={require('../../assets/image/msg.png')}
                                    style={{
                                        resizeMode: 'stretch',
                                        height: height / 12,
                                        width: width / 4.5
                                    }}
                                />
                                <View style={{ marginLeft: 5 ,}}>
                                    <Text style={[style.txt,{color:'#757575'}]}>via SMS</Text>
                                    <TextInput placeholder='Phone Number'
                                    placeholderTextColor={theme.txt}
                                    keyboardType='phone-pad'
                                    selectionColor={Colors.primary}
                                    style={{
                                        color:theme.txt
                                    }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20,paddingBottom:20 }}>
                            <View style={[style.txtinput,
                            {
                                borderColor: Colors.primary,
                                height: 90,
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor:theme.input
                            }]}>
                                <Image source={require('../../assets/image/mail.png')}
                                    style={{
                                        resizeMode: 'stretch',
                                        height: height / 12,
                                        width: width / 4.5
                                    }}
                                />
                                <View style={{ marginLeft: 5 ,}}>
                                    <Text style={[style.txt,{color:'#757575'}]}>via Email</Text>
                                    <TextInput placeholder='Email'
                                    placeholderTextColor={theme.txt}
                                    selectionColor={Colors.primary}
                                    style={{
                                        color:theme.txt
                                    }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{paddingVertical:20}}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Otp')}
                        style={[style.btn]}>
                            <Text style={[style.btntxt]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}