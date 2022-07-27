/* eslint-disable prettier/prettier */
import React from 'react'
import {View, Text, SafeAreaView, Image} from 'react-native'
//import {LockClosedIcon} from 'react-native-heroicons/solid'

const ReceiveCode = () => {
  return (
    <SafeAreaView>
       <View className='mt-10 items-center content-center'>
            <Image source={require('../assets/images/logo.png')}
             className='w-30 p-4 '
            />
       </View>
    </SafeAreaView>
  )
}

export default ReceiveCode