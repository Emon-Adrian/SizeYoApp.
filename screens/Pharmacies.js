/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, ScrollView, View, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

import PharmacyCard from '../components/PharmacyCard'
const pharmacy = [
    {
        'name':'Ecopharm',
        'address':'123 Main St',
        'distance':'10 km away',
    },

    {
        'name':'Endopharm',
        'address':'123 Main St',
        'distance':'10 km away',
    },
    {
        'name':'Epi-pharm',
        'address':'123 Main St',
        'distance':'110 km away',
    },
    {
        'name':'Erpharm',
        'address':'123 Main St',
        'distance':'80 km away',
    },
    {
        'name':'Erpharm',
        'address':'123 Main St',
        'distance':'80 km away',
    },
]

const Pharmacies = ({navigation}) => {
  return (
  <ScrollView style={styles.container}>
    <View className='w-full h-16 bg-red-700'>
       <View className='flex-row items-center justify-between mt-3 px-4 '>
        <FontAwesome5 name='angle-left' size={30} onPress={navigation.goBack}/>
        <Text className='text-white text-xl'>Pharmacies</Text>
       </View>
    </View>
  {pharmacy.map((p, i) => ( (<PharmacyCard key={i} name={p.name} address={p.address} distance={p.distance}/>) ))}
  </ScrollView>
  )
}

export default Pharmacies

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:0,
      backgroundColor: '#fff',
    },
  });