/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

const Package = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View className='top-40 items-center justify-center'>
            <Text className='text-red-700 text-xl px-16'>How much PREMIUM will you pay?</Text>
            <View className='items-center flex-row justify-center mt-10'>
            <Image
            source={
                require('../assets/images/cash.png')
            }
            className='w-12 h-12'
            />
            <TextInput
             placeholder='1000                      UGX'
             placeholderTextColor={'#7D9D9C'}
             keyboardType='numeric'
             className='text-center text-black border border-gray-500 rounded-md w-60'
            />
            </View>
            <View className='flex-row items-center gap-2 mt-6 '>
                <Text className='text-red-700 text-xl'>Fetch package</Text>
                <TouchableOpacity>
                <Text className='text-slate-100 bg-green-600 px-5 text-lg py-2  rounded-full'>Go</Text>
                </TouchableOpacity>
            </View>
            <Text className='text-black px-20 mt-8 font-bold'>Package Name: FITING (KACHUPA) Member Type: PRINCIPAL Validity Period: 12 MONTHS</Text>
            <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-orange-500 px-20 text-2xl py-4 mt-5 rounded-full'>View Benefits & Limits
          </Text>
        </TouchableOpacity>
        <View className='flex-row items-center mt-24 space-x-4'>
        <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-green-700 px-12 text-2xl py-4  rounded-full'>Reset
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-red-600 px-12 text-2xl py-4  rounded-full'>Buy
          </Text>
        </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Package

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });