/* eslint-disable prettier/prettier */
import {View, Text,TextInput,StyleSheet} from 'react-native';
import React from 'react';
const Customeinput3 = ({value,setvalue,placeholder,secureTextEntry}) => {
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
        height:200,
        justifyContent:'center',
     
        width:"100%",
        borderRadius:5,
        borderColor:'#cbd1e7',
        paddingHorizontal:10,
        marginVertical:.9,
        borderWidth:1,
        marginTop:27,
        background:'transparent',

    
    
      },
      input:{
        justifyContent:'flex-start',
        paddingBottom:160,
        color:'#3E4F88',
        fontWeight:'bold',
    
    
     
      
      }
    
    
    });
    


export default Customeinput3