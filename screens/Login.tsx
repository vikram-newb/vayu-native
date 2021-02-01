import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';

const Login = ({navigation}:StackScreenProps<RootStackParamList, 'Login'>) => {
    const [verification, setVerification] = useState(false)
    if(!verification){
        return(
            <View>
                <View>
                    <ImageBackground
                        source={require('../assets/images/bitmap.png')} style={styles.backImage}  resizeMode='cover' >
                            <View>
                                <View>
                                    <Image source={require('../assets/images/1.png')} style={{width:52, height:52}} />
                                </View>
                                <View style={styles.textWrap}>
                                    <Text style={styles.header}>Enter Mobile Number</Text>
                                    <Text style={styles.subHeader}>We will send an OTP to this number for verification purpose</Text>
                            </View>
    
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.inputWrap}>
                    <View><Text style={styles.mobileHead}>Mobile Number</Text></View>
                    <View style={styles.inpCont}>
                        <View style={{opacity:0.24}}>
                            <Text style={styles.countryCode}>+91</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput style={styles.numField} placeholder="Mobile Number"></TextInput>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.continue} onPress={() => {setVerification(true)}}>
                        <Text style={{color:'#ffffff'}}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    else{
        return(
            <View>Yes i am verify screen</View>
        )
    }
}


const getOtp = () => {

}

const Verify = () => {

}

const styles = StyleSheet.create({
    backImage:{
        paddingTop: 70,
        paddingLeft: 24,
        paddingBottom: 22,
        paddingRight: 28,
    },
    banner:{
        flex:1,
        flexDirection:'column'
    },
    textWrap: {
        marginTop:46,
    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight:40,
        color:'#ffffff'
    },
    subHeader:{
        fontSize: 15,
        lineHeight: 20,
        color:'#ffffff'
    }, 
    inputWrap:{
        display:'flex', 
        flexDirection:'column',
        paddingVertical:32,
        paddingHorizontal:24,
    },
    mobileHead:{
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight:16,
        color:'#8992a3'
    }, 
    inpCont:{
        marginTop:8,
        display:'flex',
        flexDirection:'row',
    },
    countryCode:{
        paddingHorizontal:20,
        paddingVertical:12,
        fontWeight:'bold',
        fontSize:14,
        lineHeight:16,
        backgroundColor:'#8f9bb3',
        borderRadius:4
    }, 
    numField:{
        marginLeft:10,
        backgroundColor:'#e4e9f2',
        paddingVertical:8.5,
        paddingHorizontal:16,
        borderRadius:4,
        fontSize:15,
        lineHeight:24
    }, 
    continue:{
        marginTop:32,
        backgroundColor:'#6574cf',
        borderRadius:4,
        textAlign:'center',
        fontSize:14,
        lineHeight:16,
        color:'#ffffff',
        fontWeight:'bold',
        paddingVertical:12
    }


})

export default Login