/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react'
import {View,Text} from 'react-native'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'

const PharmacyCard = (props) => {
  return (
    <View className='px-6 py-3 m-1 bg-gray-200 rounded-lg'>
            <Text className='text-slate-200 bg-green-600 text-xl  p-1 text-center rounded-md w-28'>Pharmacy</Text>
            <Text className='text-black text-xl ml-4'>{props.name}</Text>
            <Text className='text-slate-200 bg-green-600 p-1 rounded-md w-28 text-center text-xl'>Address</Text>
            <Text className='text-black text-xl ml-4'>{props.address}</Text>
            <View className='flex-row justify-between'>
                <View className='flex-row items-center'>
                <LocationMarkerIcon color="#000000" size={30}/>
                <Text className='text-black'>{props.distance}</Text>
                </View>
                <Text className='text-black'>Get Direction</Text>
            </View>
    </View>
  )
}

export default PharmacyCard