/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

const ServiceProviders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View className='w-full h-16 bg-red-700'>
       <View className='flex-row items-center justify-between mt-3 px-4 '>
        <FontAwesome5 name='angle-left' size={30} onPress={navigation.goBack}/>
        <Text className='text-white text-xl'>Service Providers</Text>
       </View>
    </View>
        <View className='top-16 items-center justify-center'>
          <Text className="text-red-600 px-24 text-center">
          Select a category below to view 
          Service Providers that accept <Text className="font-bold text-xl">Size Yo</Text>
          </Text>
        </View>
        <View className='top-20 items-center justify-center'>
            <TouchableOpacity onPress={navigation.navigate('Pharmacies')}>
            <Text className='text-slate-100 bg-orange-700 text-center w-80  text-2xl py-4 mt-5 rounded-full'>View Pharmacies</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text className='text-slate-100 bg-orange-700 text-center w-80 text-2xl py-4 mt-5 rounded-full'>View Hospitals</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text className='text-slate-100 bg-orange-700 text-center w-80 text-2xl py-4 mt-5 rounded-full'>View Clinics</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text className='text-slate-100 bg-orange-700 text-center w-80 text-2xl py-4 mt-5 rounded-full'>View Labs</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ServiceProviders

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });