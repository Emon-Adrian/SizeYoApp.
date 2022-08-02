/* eslint-disable prettier/prettier */
import React,{useRoute} from 'react'
import {View, Text, SafeAreaView, Image, Pressable, TextInput, TouchableOpacity, Alert} from 'react-native'
import {LockClosedIcon, PhoneIcon} from 'react-native-heroicons/solid'
//import Button from '../constants/Button'
import COLORS from '../constants/Colors'

const ReceiveCode = ({route, navigation}) => {
  //const {phoneNumber}= route.params;
 
 
  return (
    <SafeAreaView >
       <View className='mt-10 items-center justify-center'>
            <Image source={require('../assets/images/logo.png')}
             className='w-30 p-4 '
            />
            <Text style={{color:COLORS.black}} className='mt-5 mb-16'>Choose your country</Text>
       <View className='flex-row items-center content-center gap-4 mb-4'> 
           <PhoneIcon color={COLORS.red} size={30}/>
           <View className='w-60 h-12 text-xl border border-gray-700 px-4 justify-center rounded-m'>
             <Text className='text-black text-xl'>+256 {route.params.phoneNumber}</Text> 
           </View>
        </View>     
       <View className='flex-row items-center content-center gap-4'> 
           <LockClosedIcon color={COLORS.red} size={30}/>
           <TextInput
            placeholder='Enter received code'
            placeholderTextColor={COLORS.gray}
            className='w-60 h-12 border border-gray-600 rounded-md'
           />
        </View> 
        <Text style={{color:COLORS.red}} className='mt-5 mb-12'>Code expires in 120 seconds</Text> 

        <TouchableOpacity activeOpacity={0.6}  style={{backgroundColor: COLORS.green}} className='p-4 mb-8 rounded-full'>
         <Text className='text-xl'>Resend OTP</Text>
        </TouchableOpacity >

        <TouchableOpacity activeOpacity={0.6} style={{backgroundColor: COLORS.red}} className='w-56  p-4 rounded-full'>
         <Text className='text-xl text-center'>SUBMIT</Text>
        </TouchableOpacity >

       </View>
    </SafeAreaView>
  )
}

export default ReceiveCode