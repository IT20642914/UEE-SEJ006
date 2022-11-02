/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
//rnfe
import {View, Button ,Text, Image, StyleSheet, useWindowDimensions} from 'react-native';


import React from 'react';
import Logo from '../../../assets/images/jobnestLogo.jpg';
const startscreen = () => {
const {Height} = useWindowDimensions();

  return (
    <View style={Styles.root}>
      <Image source={Logo} style={[Styles.logo  ,{Height:  Height*0.2}]} resizeMode="contain" />
      <Text style={Styles.baseText}>Join us & Explore Thousend of</Text>

      <Text style={Styles.baseTex2}>  Greate Job</Text>
      <Button color="#3E4F88"    title="Get Started"   />
    </View>
  
  );

};
const Styles = StyleSheet.create({
  root: {
    justifyContent:'center',
    alignItems: 'center',
  },

  
  logo: {
    with: '70%',
    maxWidth:350,
    maxHeight:400,

  },
  baseText:{
  
    fontSize: 16,
    color: '#3E4F88',
    
  },
  baseTex2:{
    fontWeight: 'bold',
    color: '#3E4F88',
    marginBottom:20,
  }
  
});
export default startscreen;
