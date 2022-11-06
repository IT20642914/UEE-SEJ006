/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
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
      
     <ScrollView  showsVerticalScrollIndicator={false}>
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

  <View style={ Styles.container}>
  <TouchableOpacity style={Styles.button}  onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../../../assets/images/facebook.png")}  style={{ margin:20,marginBottom:10,width:40,height:40,borderRadius:1000}}/>
        </TouchableOpacity>

        
</View>
  </View>
  <TouchableOpacity style={Styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../../../assets/images/google.png")}  style={{ margin:10,paddingLeft:62,width:60,height:60,borderRadius:1000}}/>
        </TouchableOpacity>
    
</View>






  <View style={{marginTop:60,}}>
    
  <TouchableOpacity  style={Styles.touchbl} onPress={()=>{alert("you clicked me")}}>
        <Text style={Styles.baseTex23} >Dont have a Account </Text>
        <Text  style={Styles.baseTex2} >Click Here </Text>
   
        </TouchableOpacity>
    


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
   touchbl:{
    flexDirection: 'row',
    marginLeft:70,
  marginTop:58,

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
  container: {
flex:1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
  flex:1,
  borderRadius: 1000,
  padding: 10,
marginLeft:10,
  height:10,
  width:10,
  shadowColor: '#303838',
  // shadowOffset: { width: 0, height: 1 },
  shadowRadius: 10,
  shadowOpacity: 0.35,
},


    
});

export default LoginSeekerScreen