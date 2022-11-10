/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import Logo from '../../../assets/images/jobnestLogo.jpg';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import Custuminput from '../../components/CustomeInput/Custuminput';


const Forgetpasswordpro = (props) => {
    const {Height} = useWindowDimensions();

    const  onpressReg =()=>{
      props.navigation.navigate('SeekerRegLOG');
    };
    const navigation =useNavigation();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email,setEmail] =useState('');
  
    return (
    <View style={Styles.root}>

<Image source={Logo} style={[Styles.logo  ,{Height:  Height *0.1}]} resizeMode="contain" >

</Image>
<Text style={Styles.baseText}>Enter your  E-mail Address</Text>
<View  style={Styles.content} >

<Custuminput    placeholder='Email' value={email} setvalue={setEmail} />
<CustomButton text="Send Reset Link" />

  
<View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
 <View>
   <Text style={{width: 150, textAlign: 'center'}}>Or Login with </Text>
 </View>
 <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

</View>

<View >
   
   <TouchableOpacity  style={Styles.touchbl}  onPress={onpressReg}>
         <Text style={Styles.baseTex1} >Dont have a Account </Text>
         <Text  style={Styles.click} >Register </Text>
    
         </TouchableOpacity>
     
  
  
  </View>


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
      width:350,
      height:300,
   
     },
     baseText:{  
      
 
     
       fontSize: 16,
       marginRight:170,
    
        fontWeight: 'bold',
     
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

export default Forgetpasswordpro