/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import { View, Text,SafeAreaView,Image ,ToastAndroid,StyleSheet,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'

import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect } from 'react'
import Custuminput from '../../components/Customeinput2/CustomeInput2';


const AddLocation = () => {
    const [AddLocation,setLocation] =useState('');
    const navigation =useNavigation();
    
  const onpressSave =()=>{

   ToastAndroid.show(' Request sent successfully!', ToastAndroid.SHORT);
   navigation.navigate('Successfully Added!');
   
 
 }


  return (
    <View style={Styles.root}>
          <Text style={Styles.baseText}>ADD Locations</Text>
    <View style={Styles.card}>
            <View style={Styles.cardin}>
      
         
        <Custuminput    placeholder=' Add Job Location' value={AddLocation} setvalue={setLocation} />
        <CustomButton text="Save"   onPress={ onpressSave} />
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
    baseText:{
      marginTop:10,
      paddingRight:240,
       fontSize: 16,
       color: '#3E4F88',
        fontWeight: 'bold',},
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
        marginTop:30,
     backgroundColor:'#D9D9DA',
        height:200,
        width:'80%',
        alignContent:'center',
        borderRadius:20,
     },cardin:{
        alignContent:'center',
        justifyContent:'center',
        margin:30,
     }
    
      
   });

export default AddLocation