/* eslint-disable prettier/prettier */
import React from 'react'
import {Text, View} from 'react-native'
import COLORS from './Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Header = () => {
  return (
    <View className='w-full h-16 bg-red-700'>
    <View className='flex-row items-center justify-between mt-3 px-4 '>
     <FontAwesome5 name='angle-left' size={30}/>
     <Text className='text-white text-xl'>Service Providers</Text>
    </View>
 </View>
  )
}

export default Header;
