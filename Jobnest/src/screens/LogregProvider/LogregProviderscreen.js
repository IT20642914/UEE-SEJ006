/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { View, Text,Image ,StyleSheet,useWindowDimensions} from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/undraw_job_offers_re_634p.png';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
const LogregProviderscreen = () => {
    const {Height} = useWindowDimensions();

    const navigation =useNavigation();


  
    const onLOGINPressed= ()=>{

  
      navigation.navigate('ProviderLOG');
      
      }
      
      
      const onsGetReGdPressed= ()=>{
      
      
      navigation.navigate('ProviderReg');
    
      
      }








  return (
    <View style={Styles.root}>
         <Text style={Styles.baseText}>Job Provider</Text>
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

  });
export default LogregProviderscreen