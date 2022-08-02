/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import PhoneInput from "react-native-phone-number-input";


const GetOTP = ({navigation}) => {


  const [phoneNumber, setPhoneNumber] = useState("");
  
  const onSubmit = () => {
    navigation.navigate("ReceiveCode",  {
      phoneNumber: phoneNumber
    })
  }

  return (
    <SafeAreaView style={styles.container}>
         <View className='mt-10 items-center content-center'>
            <Image source={require('../assets/images/logo.png')}
             className='w-30 p-4'
            />
            <Text className='text-gray-700 text-xl mt-16 mb-6'>Choose your country</Text>
           
           <PhoneInput
           defaultCode='UG'
           value={phoneNumber}
           maxLength = {9}
           onChangeText={(value) => setPhoneNumber(value)}
           />
           <Text className='text-red-700 text-sm mt-10 px-10 text-center'>Enter a valid phone number to receive a verification code</Text>
           <TouchableOpacity className='' activeOpacity={0.7} onPress={onSubmit}>
            <Text className='text-slate-100 bg-red-700 px-20 text-2xl  py-4 mt-16 border border-gray-700 rounded-full'>Get OTP</Text>
        </TouchableOpacity>
         </View>
    </SafeAreaView>
  )
}

export default GetOTP

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });