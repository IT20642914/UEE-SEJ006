/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import { View, Text,SafeAreaView,Image, ToastAndroid,StyleSheet, StatusBar,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'

import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect } from 'react'
import Custuminput from '../../components/CustomeInput/Custuminput';
import Customeinput3 from '../../components/Custominput3/Customeinput3';
import Customeinput4 from '../../components/Custominput4/Customeinput4';
const AddselfEmpPost = () => {
  const [jobtype,setJobtype] =useState('');
  const navigation =useNavigation();
  const [Description,setDescription] =useState('');
  const onpressAdd =()=>{
    
    ToastAndroid.show(' Request sent successfully!', ToastAndroid.SHORT);
     navigation.navigate('Successfully Add!  ');
    
  
  }



      
return (
  <View style={Styles.root}>
    
    <ScrollView  showsVerticalScrollIndicator={false}>
        <Text style={Styles.baseText}>ADD Articles </Text>
  <View style={Styles.card}>
          <View style={Styles.cardin}>
             <Customeinput4    placeholder='Title' value={jobtype} setvalue={setJobtype} />
             <Customeinput3    placeholder='Description' value={Description} setvalue={setDescription} />
             <TouchableOpacity  style={Styles.touchbl} onPress={()=>{alert("add image here")}}>
             <Image source={require("../../../assets/images/dummy11-1.jpg")}  style={{ margin:10,width:250,height:200,}}/>
   
        </TouchableOpacity>
    
         </View>
         
         <CustomButton text="Add"  onPress={ onpressAdd}  />
  </View>

  </ScrollView></View>

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
    
      marginTop:50,
   backgroundColor:'white',
      height:'90%',
      width:'100%',
      alignContent:'center',
      borderRadius:20,
   },cardin:{
 
    
      alignContent:'center',
      justifyContent:'center',
      margin:30,
     
   }
  
    
 });


export default AddselfEmpPost