/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */

import { View, Text,SafeAreaView,Image ,StyleSheet,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'

import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect } from 'react'
import Custuminput from '../../components/Customeinput2/CustomeInput2';
import Logo from '../../../assets/images/facebook.png';
const SuccessfullyUpLocation = () => {
   const [jobtype,setJobtype] =useState('');
    const navigation =useNavigation();
    const {Height} = useWindowDimensions();
    const onpressback =()=>{
        navigation.navigate('VIEW ALL JOBS TYPES');

      }
    
  
    return (
    <View style={Styles.root}>
    
    <View style={Styles.card}>
            <View style={Styles.cardin}>
            <Image source={require("../../../assets/images/checkbox-303113.png")}  style={{ margin:10,width:250,height:250,borderRadius:1000}}/>
            <Text style={Styles.baseTextH}> successfully Updated!</Text>
            <Text style={Styles.baseTextH2}> Location  Has Been Update Successfully.</Text>
       
        </View>
        
    </View>
    <CustomButton text="Back To View All Locations"  onPress={ onpressback}  />
   </View>
  
  )
}
const Styles = StyleSheet.create({
    root: {
       
     
      
        height:"100%",
   
       alignItems: 'center',
     },
     safe:{
        
        justifyContent: "center",
        alignItems: "center",
    } ,

     title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
      },Text:{
        marginTop:10,
        paddingRight:240,
         fontSize: 16,
         color: '#3E4F88',
          fontWeight: 'bold',},
     card:{
        borderColor:'#3E4F88',
        borderWidth:1,
        marginTop:50,
     backgroundColor:'#D9D9DA',
        height:400,
        width:'80%',
        alignContent:'center',
        borderRadius:20,
     },cardin:{
        alignContent:'center',
        justifyContent:'center',
        margin:30,
     }
    ,  baseTextH:{
      textAlign:'center',
      fontSize: 23,
      color: '#3E4F88',
       fontWeight: 'bold',
 
    },baseTextH2:{
textAlign:'center',
      fontSize: 16,
      color: '#3E4F88',
    
 
    },
    
      
   });



export default SuccessfullyUpLocation