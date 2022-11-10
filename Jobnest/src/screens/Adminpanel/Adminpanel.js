/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,ImageBackground,TouchableOpacity} from 'react-native'

import Logo from '../../../assets/images/jobnestLogo.jpg';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import Custuminput from '../../components/CustomeInput/Custuminput';
import CustomeAdminbtn from '../../components/CustomeButtonAdmin/CustomeAdminbtn';




const Adminpanel = () => {
  const {Height} = useWindowDimensions();

  const navigation =useNavigation();
 
  const onprssAddjobs =()=>{
    navigation.navigate('ADD JOBS TYPES');
    
  
  }
  const onpressViewalljobTypes =()=>{
    navigation.navigate('VIEW ALL JOBS TYPES');
    
  
  }

  const onpessAddLocations =()=>{
    navigation.navigate('ADD LOCATIONS');
    
  
  }

  const onpressViewallLocations =()=>{
    navigation.navigate('VIEW ALL LOCATIONS');
    
  
  }

  return (
    <View>
      
      <ImageBackground source={Logo} style={[Styles.logo  ,{Height:  Height *0.2}]} resizeMode="contain" >
  
  </ImageBackground>
  
  <Text style={Styles.baseText}>ADMIN OPARATIONS</Text>

  <CustomeAdminbtn text="Add Job Types"  onPress={ onprssAddjobs }   />
  <CustomeAdminbtn text="View All Job Types" onPress={ onpressViewalljobTypes} />
  <CustomeAdminbtn text="Add Locations"   onPress={ onpessAddLocations}/>
  <CustomeAdminbtn text="View All Locations" onPress={ onpressViewallLocations}  />
  <CustomeAdminbtn text="Add Self Employement Post"  />
  <CustomeAdminbtn text="View All  Self Employement Post"  />
 
   
    </View>
  )
}
const Styles = StyleSheet.create({
  root: {
     backgroundColor:'white',
     height:"100%",
     justifyContent:'center',
     alignItems: 'center',
   },
   touchbl:{
      flexDirection: 'row',
   justifyContent:'center',
    // marginLeft:32,
    // marginRight:10,
      marginTop:20,
      buttonText:{
        

      },
      button:{
        
        width:100.,color:'red',},

     },
     baseText:{  
      marginTop:20,
      marginLeft:20,
      fontSize: 16,
      color: '#3E4F88',
       fontWeight: 'bold',
       marginBottom:40  ,
    
   },
     click:{
      textAlign:'center',
      fontSize: 14, 
      color: '#3E4F88',
   fontWeight:'bold',
      marginBottom:10,
   
     },
   content:{
      justifyContent:'center',
      alignItems: 'center',width:'90%',

   },
 
   logo: {
   
    justifyContent:'center',
    backgroundColor:'#FBFBFB',
    paddingLeft:350,
  
    width:'100%',
    height:70,
 
   },


  input:{
      marginHorizontal:10,
 marginVertical:10,
  },
  container: {
 flex:1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 
 
 
    
 });


export default Adminpanel