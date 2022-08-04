/* eslint-disable prettier/prettier */
import React from 'react'
import {ScrollView, Text, View, Image, StyleSheet, TouchableO, ScrollViewpacity} from 'react-native'
import TreatmentHistoryCard from '../components/TreatmentHistoryCard'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

const History = [
    {
        'careType':'Consultation',
        'servicePoint':'IHK',
        'amount':'30,000',
        'due':'19/02/2022',
    },

    {
        'careType':'Consultation',
        'servicePoint':'IHK',
        'amount':'30,000',
        'due':'19/02/2022',
    },
    {
        'careType':'Consultation',
        'servicePoint':'IHK',
        'amount':'30,000',
        'due':'19/02/2022',
    },
    {
        'careType':'Consultation',
        'servicePoint':'IHK',
        'amount':'30,000',
        'due':'19/02/2022',
    },
    {
        'careType':'Consultation',
        'servicePoint':'IHK',
        'amount':'30,000',
        'due':'19/02/2022',
    },
]

const GetStarted = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <View className='w-full h-16 bg-red-700'>
       <View className='flex-row items-center justify-between mt-3 px-4 '>
        <FontAwesome5 name='angle-left' size={30} onPress={navigation.goBack}/>
        <Text className='text-white text-xl'>Treatment History</Text>
       </View>
    </View>
        <View className=''>
            {History.map((p, i) => ( (<TreatmentHistoryCard key={i} careType={p.careType} servicePoint={p.servicePoint} amount={p.amount} due={p.due}/>) ))}
        </View>
    </ScrollView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });