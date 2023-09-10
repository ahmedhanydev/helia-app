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
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PhoneInput from 'react-native-phone-number-input';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Reservation() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectDate, setSelectDate] = useState('Select Date');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
        hideDatePicker();
    };

    const [phoneNumber, setPhoneNumber] = useState('')
    const phoneInput = useRef(null);

    const categories = ['Mr.', 'Mrs.', 'Ms.'];
    const [categoryIndex, setcategoryIndex] = useState(0)

    const Categorylist = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, marginTop: 10 }]}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index}
                    activeOpacity={0.8}
                    onPress={() => setcategoryIndex(index)}>
                    <Text
                        key={index}
                        style={[
                            style.categoryText, {},
                            categoryIndex == index && style.categoryTextSelected, { paddingHorizontal: 30 }]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        );
    };


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        title='Name of Reservation'
                        titleStyle={{ color: theme.txt, fontFamily: 'Urbanist-Bold' }}
                        elevation={0}
                        leading={<TouchableOpacity
                            onPress={() => navigation.navigate('SelectDate')}
                        >
                            <MaterialCommunityIcons name="arrow-left"
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
                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                        <View style={{ paddingTop: 20 }}>
                            <TextInput style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, }]}
                                placeholder='Full Name'
                                placeholderTextColor='#9E9E9E'
                                selectionColor={Colors.primary}
                            />
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <TextInput style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt }]}
                                placeholder='Nick Name'
                                placeholderTextColor='#9E9E9E'
                                selectionColor={Colors.primary}
                            />
                        </View>
                        <View style={{ paddingTop: 10, }}>
                            <View style={[style.txtinput, {
                                backgroundColor: theme.input,
                                color: theme.txt, flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }]}>
                                <TextInput
                                    // placeholder='Full Name'
                                    // placeholderTextColor='#9E9E9E'
                                    selectionColor={Colors.primary}
                                    value={selectDate}
                                    style={{ color: theme.txt }}

                                />
                                <TouchableOpacity onPress={showDatePicker}>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="date"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}

                                    />
                                    <MaterialCommunityIcons name='calendar-month-outline' color='#9E9E9E' size={20} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ paddingTop: 10, }}>
                            <View style={[style.txtinput, {
                                backgroundColor: theme.input,
                                color: theme.txt, flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }]}>
                                <TextInput
                                    placeholder='Email'
                                    placeholderTextColor='#9E9E9E'
                                    selectionColor={Colors.primary}
                                    style={{ color: theme.txt }}
                                />
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name='email-outline' color='#9E9E9E' size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <PhoneInput
                                selectionColor={Colors.primary}
                                ref={phoneInput}
                                defaultValue={phoneNumber}
                                defaultCode="IN"
                                layout="first"
                                withShadow
                                // autoFocus
                                codeTextStyle={{ color: theme.txt }}
                                textInputProps={{ placeholderTextColor: '#9E9E9E' }}
                                textInputStyle={{ color: theme.txt }}
                                containerStyle={{
                                    height: 50,
                                    width: '100%',
                                    borderColor: Colors.disable,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    backgroundColor: theme.input,

                                }}
                                textContainerStyle={{
                                    paddingVertical: 0,
                                    borderRadius: 10,
                                    backgroundColor: theme.input
                                }}
                                onChangeFormattedText={text => {
                                    setPhoneNumber(text);
                                }}
                            />
                        </View>
                        <View style={{ paddingTop: 100, paddingBottom: 20 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Payment')}
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