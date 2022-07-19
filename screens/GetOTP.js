/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'

const GetOTP = () => {
  return (
    <SafeAreaView style={styles.container}>
         <View className='top-40 items-center content-center'>
            <Image source={require('../assets/images/logo.png')}
             className='w-30 p-4 '
            />
            <Text className='text-gray-700 mt-16'>Choose your country</Text>
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
    },
  });