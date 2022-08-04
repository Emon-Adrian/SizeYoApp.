/* eslint-disable prettier/prettier */
import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
//import { ShoppingCartIcon,PhoneMissedCallIcon } from "react-native-heroicons/outline";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants/Colors';

const Home = ({navigation}) => {

  
  return (
    <SafeAreaView style={styles.container}>
      <View className='w-full h-20 bg-red-700 align-right'>
         <FontAwesome5 name='ellipsis-v' color={COLORS.white} size={20}/>
      </View>
       <View className='mt-12 items-center justify-center'>
          <Text className='text-gray-700 text-2xl'>Hello Nethan</Text>
          <Text className='text-gray-600 text-xl mt-10'>Select your preferred Insurer</Text>
         {/* select form */}
        
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}> 
        <View className=' flex-row items-center gap-5 rounded-full bg-red-700 px-5  py-1 mt-5'>
        <FontAwesome5 name='cart-plus' color={COLORS.white} size={40}/>
        <Text className='text-slate-100 text-xl uppercase mr-7'>  buy insurance</Text>    
        </View>
        </TouchableOpacity>


        <View className='flex-row gap-4'>
            <TouchableOpacity>
                <View className='top-20 items-center p-8 rounded-md h-30 justify-center border border-sky-300'>
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
                  <FontAwesome5 name='commenting-o' color={COLORS.red} size={40}/>
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