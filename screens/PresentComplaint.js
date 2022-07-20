/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

const PresentComplaint = () => {
  return (
    <SafeAreaView style={styles.container}>
           <View className='top-20 items-center justify-center'>
           <Image
               source={
                require('../assets/images/prudential.png')
             }
               className='w-16 h-16' 
            />
            <Text className='text-red-500 text-lg font-bold mb-3'>Presenting complaint:</Text>
            <TextInput
             placeholder='Type your presenting 
             complaint here.....e.g. "Pain 
             in my lower abdomen"'
             placeholderTextColor={'#ccc'}
             className='w-60 h-60 border border-gray-600 text-center text-black p-4'
            />
            <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-red-700 px-20 text-2xl  py-4 mt-16 border border-gray-700 rounded-full'>Next</Text>
        </TouchableOpacity>
           </View>
    </SafeAreaView>
  )
}

export default PresentComplaint

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });