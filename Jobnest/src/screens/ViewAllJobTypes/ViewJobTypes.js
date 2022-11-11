/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'

import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import Custuminput from '../../components/Customeinput2/CustomeInput2';
import { SearchBar } from 'react-native-screens';
const ViewJobTypes = () => {

    const [SearchBar,setSearchBar] =useState('');
  return (
    <View style={Styles.root}>
    <Text style={Styles.baseText}>View All Job Types</Text>
<View  style={Styles.safe}>
    <Custuminput   placeholder='Search job Types ' value={SearchBar} setvalue={setSearchBar} />
    </View>
    <View style={Styles.card}>

        <View style={Styles.cardin}>
      <View style={Styles.cardin2}>
         <Text style={Styles.baseText1}>Job Type</Text>
       
      <View  style={Styles.datalist}>

 
    <CustomButton text="Update"  type='UPDATE' />
    <CustomButton text="Delete"  type='DELETE' /></View>
    </View>
    </View>
</View></View>
  )
}
const Styles = StyleSheet.create({
    root: {

        height:"100%",

       alignItems: 'center',
     },
     baseText1:{
        margin:10,
        color:"#3E4F88",
     },
     safe:{
        width:'80%',
     },
     cardin2:{
        height:'95%',
        width:'104%',
        backgroundColor:'white',
        borderRadius:15,
        
     },
     datalist:{
    
     
        flexDirection: 'row',
        alignItems: 'center',

        display:'flex'

     },
     baseText:{
        marginTop:10,
        paddingRight:240,
         fontSize: 16,
         color: '#3E4F88',
          fontWeight: 'bold',},
     card:{
        borderColor:'#3E4F88',
        borderWidth:1,
        marginTop:15,
     backgroundColor:'#D9D9DA',
        height:200,
        width:'80%',
        alignContent:'center',
        borderRadius:20,
     },cardin:{
        alignContent:'center',
        justifyContent:'center',
        margin:30,
     }
    
      
   });
// eslint-disable-next-line prettier/prettier
export default ViewJobTypes