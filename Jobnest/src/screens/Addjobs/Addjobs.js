/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import { View, Text,SafeAreaView,Image, ToastAndroid,StyleSheet, StatusBar,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'

import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect } from 'react'
import Custuminput from '../../components/Customeinput2/CustomeInput2';



const Addjobs = () => {
  
    const [jobtype,setJobtype] =useState('');
    const navigation =useNavigation();

    const onpressSave =()=>{
      
      ToastAndroid.show(' Request sent successfully!', ToastAndroid.SHORT);
       navigation.navigate('Successfully Added! ');
      
    
    }
  


        
  return (
    <View style={Styles.root}>
    <View style={Styles.card}>
            <View style={Styles.cardin}>
      
         
        <Custuminput    placeholder='Add Job Type' value={jobtype} setvalue={setJobtype} />
        <CustomButton text="Save"  onPress={ onpressSave}  />
        </View>
    </View></View>
  
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
        height:200,
        width:'80%',
        alignContent:'center',
        borderRadius:20,
     },cardin:{
     
      paddingTop: StatusBar.currentHeight,
        alignContent:'center',
        justifyContent:'center',
        margin:30,
     }
    
      
   });

export default Addjobs