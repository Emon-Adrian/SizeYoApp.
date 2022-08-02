/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import  Header  from '../constants/Header'

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
       <View className='w-full h-16 bg-red-700' >
       <Text className='text-black'>Emon</Text>
    </View>
        <View className='mt-32 items-center justify-center'>
          <Image
            source={
                require('../assets/images/logo.png')
            }
            className='w-30 p-4 '
            />
        <Text className='text-red-700 mt-20 text-4xl font-bold'>Get Started</Text>
        <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-green-700 px-20 text-2xl uppercase py-4 mt-24 rounded-full'>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className='text-slate-100 bg-red-700 px-20 text-2xl uppercase py-4 mt-5 rounded-full'>Register</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });