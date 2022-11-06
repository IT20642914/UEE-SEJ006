/* eslint-disable prettier/prettier */
//rnfe
import {View, Text,TextInput,StyleSheet} from 'react-native';
import React from 'react';

const Custuminput = ({value,setvalue,placeholder,secureTextEntry}) => {
  return (

    <View style={Styles.Container}>
   <TextInput 
   value={value}
   onChangeText={setvalue}
   placeholder={placeholder}
   placeholderTextColor="#3E4F88"
    
   style={Styles.input}
   secureTextEntry={secureTextEntry} />
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    backgroundColor:'#ffff',
    height:45,
    justifyContent:'center',
 
    width:"100%",
    borderRadius:5,
    borderColor:'#dce0ef',
    paddingHorizontal:10,
    marginVertical:.9,
    borderWidth:1,
    marginTop:27,

  },
  input:{
    color:'#3E4F88',
  }


});

export default Custuminput;
