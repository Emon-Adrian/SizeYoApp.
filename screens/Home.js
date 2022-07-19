/* eslint-disable prettier/prettier */
import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import { ShoppingCartIcon } from "react-native-heroicons/outline";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View className='top-20 items-center justify-center'>
          <Text className='text-gray-700 text-2xl'>Hello Nethan</Text>
          <Text className='text-gray-600 text-sm mt-10'>Select your preferred Insurer</Text>
         {/* select form */}
        
        <View>
        <TouchableOpacity className='items-center'> 
        <Text className='text-slate-100  bg-red-700 px-20 text-xl uppercase py-4 mt-5 rounded-full'>
        <ShoppingCartIcon size={20} color='#fff'/> 
            buy insurance</Text>
        </TouchableOpacity>
        </View>
       </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });