/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,Pressable } from 'react-native';
import React from 'react';
const CustomeAdminbtn = ({onPress,text,type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`] ] }>
    <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
  </Pressable>
);
};


const styles=StyleSheet.create({

  container:{

      padding:10,
      width: '90%',
      marginVertical:1,
      alignItems:'center',
      
      marginHorizontal:20,


},
container_PRIMARY:{
backgroundColor:'#3E4F88',

},
container_TERTIARY:{

},

  text:{

      fontWeight:'bold',
      color:'white',
  },
  text_TERTIARY:{
    color:'gray'
  },

});

export default CustomeAdminbtn;
