import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
//import Logo from '../../assets/images/tiee.jpg'
import { useNavigation } from '@react-navigation/native';


const TitelBar = () => {
    return (
        <View style={style.TitelHolder}>
            <View style={style.TitelContainer}>
                <Text style={style.TitelText}>Jobs</Text>
            </View>
        </View>
    )
}

const JobListView = ({ ItemList }) => {
    return (
        <View style={style.detailBand}>

            <View style={style.searchView}>
                <View style={style.searchViewHolder}>
                    
                    <View style={style.iconView}>
                                         {/* <Image source={Logo} style={style.iconContent} />  */}
                                    </View>
                     <TextInput placeholder="Search Item" style={style.searchViewInput} />                
                </View>
            </View>

            <View style={style.itemContainer}>

                {
                    ItemList.map((item) => {
                        return (
                            <TouchableOpacity onPress={()=>{ alert("you press aprove")}}>
                            <View style={style.itemHolder}>
                                <View style={style.itemWrapper}>
                                    
                                    <View style={style.InfoView}>
                                        <View style={style.InfoView_row_Title}>
                                            
                                            <Text style={style.infoTitle}>{item.title}</Text>
                                        </View>
                                        <View style={style.InfoView_row}>
                                            
                                            <Text style={style.infoDetails}>{item.company}</Text>
                                        </View>
                                        <View style={style.InfoView_row}>
                                           
                                            <Text style={style.infoDetails}>{item.mode}</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                        )
                    })
                }


            </View>
        </View>
    )
}




   
//----------------------------render the app  and data    
const JobAll = () => {

    const [jobList, setJobtList] = useState([
        {
            "id": 1,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",
           
            

        },
        {
            "id": 2,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",

        },
        {
            "id": 2,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",

        },
        {
            "id": 2,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",

        },
        {
            "id": 2,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",

        },
        {
            "id": 2,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",

        },
        {
            "id": 2,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",

        },
        {
            "id": 2,
            "title": "Software Engineer",
            "company": "ABC Company",
            "mode": "Remote/On Site/Hybrid",

        }
    ])
    
    return (
        <View style={style.main}>
            <TitelBar />
            <JobListView ItemList={jobList} />
        </View>
    )
}

const style = StyleSheet.create({
    // main: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    // },
    bannerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },
    TitelHolder: {
        width: wp('100%'),
        height: hp('10%'),
        alignItems: 'center', // horizatal aling 
        justifyContent: 'center', // vertical alling
        backgroundColor:'#5c5ae1'
    },
    TitelContainer: {
        width: wp('94%'),
        height: hp('12%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    TitelText: {
        fontSize: 23,
        color: '#000',
        fontWeight: '700',
        color:'white',
    },



    detailBand: {
        width: wp('100%'),
        height: hp('85%'),
        alignItems: 'center',
        backgroundColor:'grey',
    },

    // //----------mn
    // scrollView: {
    //     backgroundColor: 'pink',
    //     marginHorizontal: 20,
    //   },

    searchView: {
        marginTop:wp('1%'),
        width: wp('100%'),
        height: hp('10%'),
        alignItems: 'center',
       backgroundColor:'black',
    },
    searchViewHolder: {
        width: wp('96%'),
        height: hp('8%'),
        alignItems: 'center',
        backgroundColor:'yellow',
        flexDirection: 'row',
        
    },
    searchViewInput: {
        width: wp('75%'),
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor:'green',
        alignItems: 'center',
    },
    iconView: {
        width: wp('16%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'pink',
        alignItems: 'center',
    },
    iconContent: {
        width: wp('10%'),
        height: hp('4%'),
        resizeMode: 'contain'  //this is image
        
    },

    itemContainer: {
        width: wp('100%'),
        height: hp('15%'),
        alignItems: 'center',
        backgroundColor:'orange',
       
        
    },
    itemHolder: {
        width: wp('94%'),
        height: hp('13%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        margin : 5,
        backgroundColor:'purple'
    },
    itemWrapper: {
        width: wp('92%'),
        height: hp('12%'),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'lightblue',
    },


    InfoView: {
        width: wp('90%'),
        height: hp('12%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black',
        
    },
    InfoView_row: {
        width: wp('85%'),
        height: hp('3%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        
    },
    InfoView_row_Title: {
        width: wp('85%'),
        height: hp('4%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        
    },
    infoTitle: {
        fontSize: 18,
        color: '#000',
        fontWeight: '800'
    },
    infoDetails: {
        fontSize: 13,
        color: '#000',
        fontWeight: '400'
    },
   
    


});

export default JobAll;