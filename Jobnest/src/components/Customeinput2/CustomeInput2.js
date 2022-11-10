/* eslint-disable prettier/prettier */
import {View, Text,TextInput,StyleSheet} from 'react-native';
import React from 'react';

const CustomeInput2 = ({value,setvalue,placeholder,secureTextEntry}) => {

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
        borderRadius:14,
        borderColor:'#cbd1e7',
        paddingHorizontal:10,
        marginVertical:.9,
        borderWidth:5,
        marginTop:27,
        background:'transparent',

    
    
      },
      input:{
        padding:4,
        color:'#3E4F88',
        fontWeight:'bold',
    
    
     
      
      }
    
    
    });
    

export default CustomeInput2