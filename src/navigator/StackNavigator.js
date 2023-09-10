import { View, Text, StatusBar } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import Introduction from '../screens/Introduction';
import Profile from '../screens/Profile';
import ForgotPassword from '../screens/ForgotPassword';
import Otp from '../screens/Otp';
import Letsin from '../screens/Letsin';
import Login from '../screens/Login';
import Welcome1 from '../screens/Welcome1';
import Welcome2 from '../screens/Welcome2';
import CreateAccount from '../screens/CreateAccount';
import CreatePass from '../screens/CreatePass';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Splash2 from '../screens/Splash2';
import Bookmark from '../screens/Bookmark';
import Notification from '../screens/Notification';
import Search from '../screens/Search';
import SearchFilter from '../screens/SearchFilter';
import Gallery from '../screens/Gallery';
import Location from '../screens/Location';
import Review from '../screens/Review';
import Reservation from '../screens/Reservation';
import Payment from '../screens/Payment';
import PaymentMethod from '../screens/PaymentMethod';
import ConfirmPayment from '../screens/ConfirmPayment';
import Hoteldetail from '../screens/Hoteldetail';
import Notification1 from '../screens/Notification1';
import Security from '../screens/Security';
import NewCard from '../screens/NewCard';
import Ticket from '../screens/Ticket';
import CancelBooking from '../screens/CancelBooking';
import Profile2 from '../screens/Profile2';
import EditProfile from '../screens/EditProfile';
import BookingOngoing from '../screens/BookingOngoing';
import BookingCompleted from '../screens/BookingCompleted';
import BottomNavigator from './BottomNavigator';
import SelectDate from '../screens/SelectDate';
import { Colors } from '../theme/color';




const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data)
            console.log(data)

        })

        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [darkMode])

    const [showSplashScreen, setshowSplashScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setshowSplashScreen(false);
        }, 4000);


    }, [])

    const [welcome, setwelcome] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setwelcome(false);
        }, 4000);


    }, [])

    const [darkMode, setDarkMode] = useState(false)
    return (
        <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
            <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
                <StatusBar backgroundColor={darkMode === true ? Colors.active : Colors.secondary}
                    barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}
                />
                <Stack.Navigator>
                    {
                        showSplashScreen ?
                            <Stack.Screen
                                name="Splash"
                                component={Splash}
                                options={{ headerShown: false }} />
                             :null


                    }
                    {
                         welcome?
                         <Stack.Screen 
                         name="Welcome1"
                             component={Welcome1}
                             options={{ headerShown: false }}
                         /> :<Stack.Screen
                         name="Introduction"
                         component={Introduction}
                         options={{ headerShown: false }} />
                    }
                            
                    
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Letsin"
                        component={Letsin}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="Welcome1"
                        component={Welcome1}
                        options={{ headerShown: false }} /> */}
                    {/* <Stack.Screen
                        name="Welcome2"
                        component={Welcome2}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="CreateAccount"
                        component={CreateAccount}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="CreatePass"
                        component={CreatePass}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="Bookmark"
                        component={Bookmark}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Notification"
                        component={Notification}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="Search"
                        component={Search}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="SearchFilter"
                        component={SearchFilter}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Gallery"
                        component={Gallery}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Location"
                        component={Location}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Review"
                        component={Review}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Reservation"
                        component={Reservation}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Payment"
                        component={Payment}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="PaymentMethod"
                        component={PaymentMethod}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="ConfirmPayment"
                        component={ConfirmPayment}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Hoteldetail"
                        component={Hoteldetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Notification1"
                        component={Notification1}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Security"
                        component={Security}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="NewCard"
                        component={NewCard}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Ticket"
                        component={Ticket}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="CancelBooking"
                        component={CancelBooking}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="Profile2"
                        component={Profile2}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="EditProfile"
                        component={EditProfile}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="BookingOngoing"
                        component={BookingOngoing}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="BookingCompleted"
                        component={BookingCompleted}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="BottomNavigator"
                        component={BottomNavigator}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="SelectDate"
                        component={SelectDate}
                        options={{ headerShown: false }} />
                      

                </Stack.Navigator>
            </NavigationContainer>
        </themeContext.Provider>
    )
}