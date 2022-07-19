import React from 'react'
import { SafeAreaView, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
          <View>
            <TextInput
               placeholder="Given Name*"
               placeholderTextColor={'#A2B5BB'}
               className='border border-gray-600 rounded-lg p-2 mt-4 w-72'
            />
            <TextInput
               placeholder="Surname*"
               placeholderTextColor={'#A2B5BB'}
               className='border border-gray-600 rounded-lg p-2 mt-4 w-72'
            />
            <TextInput
              placeholder="Secret Word*"
              placeholderTextColor={'#A2B5BB'}
              className='border border-gray-600 rounded-lg p-2 mt-4 w-72'
            />
            <Text className='text-xs text-red-600 text-center mt-3'>The secret word will be used to identify you at points of care</Text>
          </View>
            <TouchableOpacity>
              <Text className='text-slate-100 bg-red-700 px-20 text-xl uppercase py-4 mt-20 rounded-full'>Proceed</Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });