/* eslint-disable prettier/prettier */
//rnfe
import {View, Text, Image, StyleSheet} from 'react-native'

import React from 'react';
import Logo from '../../../assets/images/jobnestLogo.jpg'
const startscreen = () => {
  return (
    <View style={Styles.root}>
      <Image source={Logo} style={Styles.logo} resizeMode="contain" />
    </View>
  );

};
const Styles = StyleSheet.create({
  root: {
    justifyContent:'center',
    alignItems: 'center',
  },
  logo: {
    with: 300,
    height: 400,
  
  },
});
export default startscreen;
