/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Stack NavBar
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import Splash from '../Screens/SplashScreen';
import SignUp from '../Screens/SignUpScreen';
import SignIn from '../Screens/SignInScreen';
import Otp from '../Screens/OtpScreen';
import Birthday from '../Screens/BirthdayScreen';
import GenderSelection from '../Screens/GenderSelectScreen';
import InterestSelection from '../Screens/InterestedSelectionScreen';
import Home from '../Screens/HomeScreen';
import PairMatch from '../Screens/PairMatchScreen';
import Message from '../Screens/MessagesScreen';
import Chat from '../Screens/ChatScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Birthday" component={Birthday} />
        <Stack.Screen name="GenderSelection" component={GenderSelection} />
        <Stack.Screen name="InterestSelection" component={InterestSelection} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PairMatch" component={PairMatch} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default Navigation;
