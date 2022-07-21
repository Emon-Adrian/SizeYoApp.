/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

const CallType = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View className='top-24 items-center'>
        <Image
               source={
                require('../assets/images/prudential.png')
             }
               className='w-16 h-16' 
            />
          <Text className='text-red-600 text-bold'>Presenting complaint:</Text>  
          <Text className='text-gray-400 font-light'>"Pain in my lower abdomen"</Text>  

          <TouchableOpacity className=''>
            <Text className='text-red-500 bg-gray-200 px-20 text-2xl  py-4 mt-16 border border-gray-800 rounded-full'>Edit</Text>
        </TouchableOpacity>
        <Text className='text-red-600 font-bold text-xl mt-5'>Choose call type:</Text>
        <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-red-700 px-20 text-2xl py-4 mt-5 rounded-full'>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-green-600 px-20 text-2xl py-4 mt-5 rounded-full'>Request Call Back</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default CallType;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });