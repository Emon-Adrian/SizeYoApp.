/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'

const Call = () => {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
        <View className='items-center'>
        <Image
               source={
                require('../assets/images/prudential.png')
             }
               className='w-16 h-16' 
            />  
          <Text className='text-gray-400 font-light px-28 text-center mb-12'>There are currently 15 patients in queue ahead of you.</Text>  

        <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-red-700 px-20 text-2xl py-4 mt-5 rounded-full'>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity className=''>
            <Text className='text-slate-100 bg-green-600 px-20 text-2xl py-4 mt-5 rounded-full'>Request Call Back</Text>
        </TouchableOpacity>
        <TouchableOpacity className=''>
            <Text className='text-red-500 bg-gray-200 px-20 text-2xl  py-4 mt-16 border border-red-700 rounded-full'>Edit</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Call;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });