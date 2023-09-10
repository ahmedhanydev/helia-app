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
import React, { useState, useContext ,useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import RBSheet from 'react-native-raw-bottom-sheet';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Review() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const categories = ['All', '5', '4', '3', '2', '1']
    const [categoryIndex, setcategoryIndex] = useState(0)

    const Categorylist = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, marginTop: 10 }]}>
            {categories.map((item, index) => (
                <TouchableOpacity style={{ flexDirection: 'row' }}
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => setcategoryIndex(index)}>
                    <View style={[
                        style.categoryText,
                        categoryIndex == index && style.categoryTextSelected,
                        { flexDirection: 'row', alignItems: 'center' }
                    ]}>
                        <MaterialCommunityIcons name='star' style={[
                            style.ctext,
                            categoryIndex == index && style.cts,
                            { marginHorizontal: 5 }
                        ]} />

                        <Text
                            key={index}
                            style={[
                                style.ctext,
                                categoryIndex == index && style.cts,
                            ]}
                        >
                            {item}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:20}]}>
                <AppBar
                    color={theme.bg}
                    title='Review'
                    titleStyle={{ color: theme.txt, fontFamily: 'Philosopher-Regular' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('Hoteldetail')}
                    >
                        <MaterialCommunityIcons name="arrow-left"
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity
                    >
                        <MaterialCommunityIcons name="dots-horizontal-circle-outline"
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <View>
                    <ScrollView horizontal nestedScrollEnabled={true} showsHorizontalScrollIndicator={false}>
                        <Categorylist />
                    </ScrollView>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'Urbanist-Bold' }]}>Rating</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name='star' size={20} color='#FFD300' />
                        <Text style={[style.subtxt, { color: Colors.primary, marginHorizontal: 7 }]}>4.8</Text>
                        <Text style={[style.subtxt, { color: theme.txt2 }]}>(4,981 reviews)</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

                    <TouchableOpacity onPress={() => this.RBSheet.open()}>
                    <RBSheet ref={ref => {
                                this.RBSheet = ref;
                            }}
                                height={550}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: theme.bg
                                    }
                                }}>
                                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                    <Text style={[style.subtitle, { textAlign: 'center', color: theme.txt }]}>Rate the Hotel</Text>
                                    <View style={[style.divider, { marginVertical: 10,backgroundColor:'#EEEEEE' }]}></View>
                                    <View style={{
                                        height: 120,
                                        backgroundColor: theme.input,
                                        borderRadius: 20,
                                    }}>
                                        <View style={{ marginHorizontal: 8, flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={require('../../assets/image/Rectangle1.png')}
                                                style={{
                                                    resizeMode: 'stretch',
                                                    height: height / 9,
                                                    width: width / 4,
                                                    alignSelf: 'center',
                                                    marginTop: 10
                                                }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: theme.txt }]}>Royale President</Text>
                                                <Text style={[style.txt, { color: theme.txt2, marginTop: 5 }]}>Paris, France</Text>
                                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                                    <Ionicons name='star' size={15} color='#FFD300' />
                                                    <Text style={[style.subtxt, { color: Colors.primary, marginHorizontal: 3 }]}>4.8</Text>
                                                    <Text style={[style.subtxt, { color: theme.txt2 }]}>(4,981 reviews)</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                                <Text style={[style.subtitle, { color: Colors.primary, fontFamily: 'Urbanist-Bold' }]}>$29</Text>
                                                <Text style={[style.subtxt, { color: theme.txt2, alignItems: 'flex-end', }]}>/ night</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={[style.subtitle,{color:theme.txt,textAlign:'center',marginTop:20}]}>Please give your rating & review</Text>
                                    <View style={{paddingTop:20}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                        <Ionicons name='star' size={25} color='#FFD300' />
                                        <Ionicons name='star' size={25} color='#FFD300' />
                                        <Ionicons name='star' size={25} color='#FFD300' />
                                        <Ionicons name='star' size={25} color='#FFD300' />
                                        <Ionicons name='star-outline' size={25} color={theme.txt} /> 
                                        </View>
                                    </View>
                                    <View style={{paddingTop:10}}>
                                        <View style={[style.txtinput,{backgroundColor:theme.input,height:62}]}>
                                            <Text style={[style.txt,{color:theme.txt}]}>The rooms are very comfortable and the natural views are amazing, can't wait to come back again!</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 20,  }}>
                                        <TouchableOpacity
                                            // onPress={()=>navigation.navigate('')}
                                            style={[style.btn, ]}>
                                            <Text style={[style.btntxt, { color: Colors.secondary }]}>Rate now</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginVertical: 20,  }}>
                                        <TouchableOpacity
                                            // onPress={()=>navigation.navigate('')}
                                            style={[style.btn, {  backgroundColor: theme.btn }]}>
                                            <Text style={[style.btntxt, { color: theme.skip }]}>Latter</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </RBSheet>
                        <View style={{ backgroundColor: theme.input, padding: 15, borderRadius: 15, marginBottom: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../assets/image/Ellipse.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 18, width: width / 8 }}></Image>
                                <View style={{ marginHorizontal: 10, flex: 1 }}>
                                    <Text style={[style.txt, { color: theme.txt }]}>Jenny Wilson</Text>
                                    <Text style={[style.subtxt, { color: Colors.disable }]}>Dec 10, 2024</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1, }}>
                                    <MaterialCommunityIcons name='star' color={Colors.secondary}></MaterialCommunityIcons>
                                    <Text style={[style.subtxt, { color: Colors.secondary, marginLeft: 5 }]}>5</Text>
                                </View>
                            </View>
                            <Text style={[style.subtxt, { color: theme.txt2, marginTop: 5, lineHeight: 18 }]}>Very nice and comfortable hotel, thank you for accompanying my vacation!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.RBSheet.open()}>
                        <View style={{ backgroundColor: theme.input, padding: 15, borderRadius: 15, marginBottom: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../assets/image/Ellipse1.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 18, width: width / 8 }}></Image>
                                <View style={{ marginHorizontal: 10, flex: 1 }}>
                                    <Text style={[style.txt, { color: theme.txt }]}>Guy Hawkins</Text>
                                    <Text style={[style.subtxt, { color: Colors.disable }]}>Dec 10, 2024</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1, }}>
                                    <MaterialCommunityIcons name='star' color={Colors.secondary}></MaterialCommunityIcons>
                                    <Text style={[style.subtxt, { color: Colors.secondary, marginLeft: 5 }]}>4</Text>
                                </View>
                            </View>
                            <Text style={[style.subtxt, { color: theme.txt2, marginTop: 5, lineHeight: 18 }]}>Very beautiful hotel, my family and I are very satisfied with the service!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.RBSheet.open()}>
                        <View style={{ backgroundColor: theme.input, padding: 15, borderRadius: 15, marginBottom: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../assets/image/Ellipse2.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 18, width: width / 8 }}></Image>
                                <View style={{ marginHorizontal: 10, flex: 1 }}>
                                    <Text style={[style.txt, { color: theme.txt }]}>Kristin Watson</Text>
                                    <Text style={[style.subtxt, { color: Colors.disable }]}>Dec 09, 2024</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1, }}>
                                    <MaterialCommunityIcons name='star' color={Colors.secondary}></MaterialCommunityIcons>
                                    <Text style={[style.subtxt, { color: Colors.secondary, marginLeft: 5 }]}>5</Text>
                                </View>
                            </View>
                            <Text style={[style.subtxt, { color: theme.txt2, marginTop: 5, lineHeight: 18 }]}>The rooms are very comfortable and the natural views are amazing, can't wait to come back again!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.RBSheet.open()}>
                        <View style={{ backgroundColor: theme.input, padding: 15, borderRadius: 15, marginBottom: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../assets/image/Ellipse3.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 18, width: width / 8 }}></Image>
                                <View style={{ marginHorizontal: 10, flex: 1 }}>
                                    <Text style={[style.txt, { color: theme.txt }]}>Darrell Steward</Text>
                                    <Text style={[style.subtxt, { color: Colors.disable }]}>Dec 09, 2024</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1, }}>
                                    <MaterialCommunityIcons name='star' color={Colors.secondary}></MaterialCommunityIcons>
                                    <Text style={[style.subtxt, { color: Colors.secondary, marginLeft: 5 }]}>5</Text>
                                </View>
                            </View>
                            <Text style={[style.subtxt, { color: theme.txt2, marginTop: 5, lineHeight: 18 }]}>Extraordinary! I am very happy with the facilities and services provided! Highly recommended!</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}