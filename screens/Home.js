/* eslint-disable prettier/prettier */
import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import { ShoppingCartIcon,PhoneMissedCallIcon } from "react-native-heroicons/outline";
import {ChatAltIcon} from "react-native-heroicons/solid"

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className='w-full h-20 bg-red-700'>
         <Text className="font-bold text-right p-4">:</Text>
      </View>
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
        <View className='flex-row gap-4'>
            <TouchableOpacity>
                <View className='top-20 items-center p-8 rounded-md h-30 justify-center border border-sky-300 drop-shadow-lg '>
                <Image
            source={
                require('../assets/images/support.png')
            }
            className='w-10 h-10'
            /> 
               <Text className='text-slate-900'>Call Support</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='top-20 items-center p-8 rounded-md h-30 justify-center border border-sky-200'>
                  <ChatAltIcon color='##c53535' size={20}/>
               <Text className='text-slate-900'>Text Support</Text>
                </View>
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