/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import StartScreen from '../screens/startScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator >
        <Stack.Screen name="StartScreen" options={{headerShown: false}} component={StartScreen} ></Stack.Screen>
        <Stack.Screen name="LoginScreen" component={LoginScreen} ></Stack.Screen>
    
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
