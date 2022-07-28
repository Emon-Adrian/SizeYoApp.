/* eslint-disable prettier/prettier */
import React from 'react'
import { View, TextInput } from 'react-native'

const TextInputField = ({}) => {
  return (
    <View>
           <TextInput
            placeholder='+256-----------'
            className='w-60 h-16 border border-gray-600 rounded-md'
           />
        </View> 
  )
}

export default TextInputField