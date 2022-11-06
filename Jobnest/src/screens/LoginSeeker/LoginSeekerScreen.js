/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,ImageBackground,ScrollView} from 'react-native'
import Logo from '../../../assets/images/undraw_job_hunt_re_q203.png';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import Custuminput from '../../components/CustomeInput/Custuminput';

const LoginSeekerScreen = () => {
  const {Height} = useWindowDimensions();

  const navigation =useNavigation();
 
 const [email,setEmail] =useState('');
 const [password,setPassword] =useState('');

 
 
 
 
 
 
  return (

    <View style={Styles.root}>
      
     <ScrollView >
      <Text style={Styles.baseText}>Welcome Back</Text>
      <Text style={Styles.baseTex2}>  Welcome back to Jobnest. Have a good time</Text>
     
         <ImageBackground source={Logo} style={[Styles.logo  ,{Height:  Height *0.1}]} resizeMode="center" >
         
         <Custuminput   placeholder='email' value={email} setvalue={setEmail} />
         <Custuminput  placeholder='Password' value={password} setvalue={setPassword} secureTextEntry  />
           
           
         </ImageBackground>
         <CustomButton text="Login"  />

         

<CustomButton 
text="Forgot Password"
type='TERTIARY'
/>


<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 150, textAlign: 'center'}}>Or Login with </Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View  />
  <View style={{flex: 1,}} >

    <CustomButton text=" Login with facebook" /> 

  </View>
  <View style={{flex: 1,}} ><CustomButton  text="Login Google" /></View>
</View>






<View style={{ flexDirection: "row"}}>
  <View style={{ paddingLeft:62, row: .9 }}>
    
<CustomButton 
text="Dont have a account "
type='TERTIARY'

/></View>




<Text style={{    fontSize: 12,paddingTop:23, color:'#3E4F88',}}>RGISTER</Text>

</View>
















         
</ScrollView>
        


        
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
  
   
   logo: {
  
     height: 250,
     width: 370,
   },
   baseText:{  
    marginTop:60,
    paddingLeft:70,
    justifyContent:'center',
     fontSize: 32,
     color: '#3E4F88',
      fontWeight: 'bold',
   
  },
 
  baseTex2:{ 
    paddingLeft:30,
    fontSize: 14, 
    color: '#3E4F88',
    paddingBottom:70,
  },
  input:{
marginTop:70,
  },
  
    
});

export default LoginSeekerScreen