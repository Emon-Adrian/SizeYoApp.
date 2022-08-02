/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants/Colors';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
           <View className='top-16'> 
              <View className='flex-row items-center justify-center gap-5'>
              <Image
               source={
                require('../assets/images/prudential.png')
             }
               className='w-16 h-16'
            />
              <Text className='text-black text-xl font-bold'>Welcome Nathan</Text>
              </View>
              <Text className='text-black text-xl px-6 text-center mt-2'>You are currently subscribed to KAFITTING premium package</Text>
              <Text className='text-black px-6 text-2xl text-center mt-4 font-bold'>Limit balance: 50,000 UGX</Text>
              <TouchableOpacity activeOpacity={0.3}>
              <View className='flex-row items-center justify-center gap-5 bg-red-700  text-2xl mt-20 rounded-full'>
              <FontAwesome5
               name='user-md' size={30} style={{color:COLORS.white}}
            />
              <Text className='text-slate-100 uppercase text-2xl'>Call The Doctor</Text>
              </View>
              </TouchableOpacity>

             
            <View className='flex-row gap-4 items-center justify-center'>
              <TouchableOpacity>
                <View className='top-20 items-center p-8 rounded-md h-30 justify-center border border-sky-300 drop-shadow-lg '>
                <Image
            source={
                require('../assets/images/microscope.png')
            }
            className='w-10 h-12'
            /> 
               <Text className='text-slate-900'>Service Providers</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View className='top-20 items-center p-8 rounded-md h-30 justify-center border border-sky-200'>
                <Image
            source={
                require('../assets/images/history.png')
            }
            className='w-10 h-12'
            />  
               <Text className='text-slate-900'>Treat history</Text>
                </View>
            </TouchableOpacity>
        </View>
           </View>
           
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });