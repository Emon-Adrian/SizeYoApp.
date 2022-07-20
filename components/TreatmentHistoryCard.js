/* eslint-disable prettier/prettier */
import React from 'react'
import {View, Text} from 'react-native'

const TreatmentHistoryCard = (props) => {
  return (
    <View className='px-6 py-3 m-3 bg-gray-200 rounded-lg space-y-1'>
            <View className='flex-row gap-3 items-center'>
                <Text className='bg-green-600 text-xl  p-1 text-center rounded-md w-28'>Care type</Text>
                <Text className='text-black text-xl'>{props.careType}</Text>
            </View>
            <View className='flex-row gap-3 items-center'>
                <Text className='bg-green-600 text-xl  p-1 text-center rounded-md w-28'>Service Point</Text>
                <Text className='text-black text-xl'>{props.servicePoint}</Text>
            </View>
            <View className='flex-row gap-3 items-center'>
                <Text className='bg-green-600 text-xl  p-1 text-center rounded-md w-28'>Amount</Text>
                <Text className='text-black text-xl'>{props.amount}</Text>
            </View>
            <View className='flex-row gap-3 items-center'>
                <Text className='bg-green-600 text-xl  p-1 text-center rounded-md w-28'>Due</Text>
                <Text className='text-black text-xl'>{props.due}</Text>
            </View>
    </View>
  )
}

export default TreatmentHistoryCard