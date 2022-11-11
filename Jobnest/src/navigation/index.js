/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import StartScreen from '../screens/startScreen';
import LoginType from '../screens/LoginType';
import LogregSeekerscreen from '../screens/LogregSeeker/LogregSeekerscreen';
import LogregProviderscreen from '../screens/LogregProvider/LogregProviderscreen';
import LoginProviderscreen from '../screens/LoginProvider/LoginProviderscreen';
import LoginSeekerScreen from '../screens/LoginSeeker/LoginSeekerScreen';
import RegisterSeekerscreen from '../screens/RegisterSeeker/RegisterSeekerscreen';
import RegisteProviderScreen from '../screens/RegisterProvider/RegisterProviderscreen';
import Forgetpass from '../screens/Forgetpasswordseeker/Forgetpass';
import Forgetpasswordpro from '../screens/Forgetpasswordprovider/Forgetpasswordpro';
import Adminpanel from '../screens/Adminpanel/Adminpanel';
import Addjobs from '../screens/Addjobs/Addjobs';
import ViewJobTypes from '../screens/ViewAllJobTypes/ViewJobTypes';
import AddLocation from '../screens/AddLocation/AddLocation';
import ViewAllLocations from '../screens/ViewAllLocations/ViewAllLocations';
import Successmgs from '../screens/Succsessmgsjobtyoe/Successmgs';
import SuccesssmgsjLocation from '../screens/SuccsessmgsJoblocations/SuccesssmgsjLocation';
import SuccessfulyUpJob from '../screens/SuccessfulyUpJobtype/SuccessfulyUpJob';
import successfullyUpLocation from '../screens/SuccessfulyUpLocations/SuccessfullyUpLocation';
import Deletejobtype from '../screens/DeleteJobtypemsg/Deletejobtype';
import Deletemgslocation from '../screens/DeleteMgsLocation/Deletemgslocation';
const Stack  = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator   screenOptions={{headerTitleAlign:'center',headerTintColor:'white',headerStyle:{backgroundColor:'#3E4F88'}}} >
        {/* <Stack.Screen name="StartScreen" options={{headerShown: false}} component={StartScreen} ></Stack.Screen>
        <Stack.Screen name="LoginScreen"  component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name="LoginType"options={{headerShown: false}} component={LoginType} ></Stack.Screen>
        <Stack.Screen name="SeekerRegLOG"options={{headerShown: false}} component={LogregSeekerscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderRegLOG"options={{headerShown: false}} component={LogregProviderscreen} ></Stack.Screen>
        <Stack.Screen name="seekerLOG"options={{headerShown: false}} component={LoginSeekerScreen} ></Stack.Screen>
        <Stack.Screen name="SeekerReg"options={{headerShown: false}} component={RegisterSeekerscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderReg"options={{headerShown: false}} component={RegisteProviderScreen} ></Stack.Screen>
        <Stack.Screen name="ProviderLOG"options={{headerShown: false}} component={LoginProviderscreen} ></Stack.Screen>  
        <Stack.Screen name="ForgetPw"options={{headerShown: false}} component={Forgetpass} ></Stack.Screen>  
        <Stack.Screen name="Forgetpasswordpro"options={{headerShown: false}} component={Forgetpasswordpro} ></Stack.Screen>   */}
        <Stack.Screen name="movetoAdminapanel"options={{ headerShown: false}} component={Adminpanel} ></Stack.Screen>  
        <Stack.Screen name="ADD JOBS TYPES" component={Addjobs} ></Stack.Screen>  
        <Stack.Screen name="VIEW ALL JOBS TYPES" component={ViewJobTypes} ></Stack.Screen>  
        <Stack.Screen name="ADD LOCATIONS" component={AddLocation} ></Stack.Screen>  
        <Stack.Screen name="VIEW ALL LOCATIONS" component={ViewAllLocations} ></Stack.Screen>  
        <Stack.Screen name="Successfully Added! " component={Successmgs} ></Stack.Screen>  
        <Stack.Screen name="Successfully Added!" component={SuccesssmgsjLocation} ></Stack.Screen> 
        <Stack.Screen name="Successfully Updated!" component={SuccessfulyUpJob} ></Stack.Screen>
        <Stack.Screen name="Successfully Updated! " component={successfullyUpLocation} ></Stack.Screen>
        <Stack.Screen name="Successfully Deleted!" component={Deletejobtype} ></Stack.Screen>
        <Stack.Screen name="Successfully Deleted! " component={Deletemgslocation} ></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
