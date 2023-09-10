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

export default function Security() {
  
    const theme = useContext(themeContext);
    const navigation=useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const [ison, setIsOn] = useState(true);
    const toggle = () => setIsOn(previousState => !previousState);

    const [ison1, setIsOn1] = useState(true);
    const toggle1 = () => setIsOn1(previousState => !previousState);

    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.bg,marginTop:20}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
            <AppBar 
            color={theme.bg}
            title='Security'
            titleStyle={[style.subtitle,{color:theme.txt}]}
            centerTitle={true}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigator')}>
            <Ionicons name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.txt,{color:theme.txt2}]}>Face ID</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.txt,{color:theme.txt2}]}>Remember me</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle}
                  value={ison}
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.txt,{color:theme.txt2}]}>Touch ID</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle1}
                  value={ison1}
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.txt,{color:theme.txt2}]}>Google Authenticator</Text>
                <Ionicons name='chevron-forward' size={20} color={Colors.primary}></Ionicons>
            </View>

            <View style={{marginTop:50}}>
            <TouchableOpacity 
            style={[style.btn,{backgroundColor:theme.btn}]}>
               <Text style={[style.btntxt,{color:theme.skip}]}>Change Password</Text>
            </TouchableOpacity>
        </View>
    
</ScrollView>
</View>
</SafeAreaView>
  )
}