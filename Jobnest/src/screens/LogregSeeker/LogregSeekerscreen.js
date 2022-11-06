/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,TouchableOpacity} from 'react-native'
import Logo from '../../../assets/images/undraw_job_hunt_re_q203.png';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const LogregSeekerscreen = () => {
  const {Height} = useWindowDimensions();

  const navigation =useNavigation();

  const onLOGINPressed= ()=>{

  
  navigation.navigate('seekerLOG');
  
  }

  
  const onsGetReGdPressed= ()=>{
  
  
  navigation.navigate('SeekerReg');

  
  }




  

  return (
    <View style={Styles.root}>
    <Text style={Styles.baseText}>Job Seeker</Text>
   <Image source={Logo} style={[Styles.logo  ,{Height:  Height *0.1}]} resizeMode="contain" />

   <CustomButton text="LOGIN" onPress={onLOGINPressed} />
   <CustomButton text="REGISTER" onPress={onsGetReGdPressed} />

   

</View>
)
}
const Styles = StyleSheet.create({
root: {
   backgroundColor:'white',

   alignItems: 'center',
 },

 
 logo: {
   marginLeft:60,
   marginTop:5,

   width: '70%',
   maxWidth:300,
   maxHeight:250,


 },
 baseText:{  
   marginTop:40,
   fontSize: 24,
   color: 'black',
    fontWeight: 'bold',
 
},
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
button: {

  borderRadius: 10000,
  padding: 10,

  height:10,
  width:10,
  shadowColor: '#303838',
  // shadowOffset: { width: 0, height: 1 },
  shadowRadius: 10,
  shadowOpacity: 0.35,
},


  

});
export default LogregSeekerscreen;