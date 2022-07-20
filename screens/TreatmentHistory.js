/* eslint-disable prettier/prettier */
import React from 'react'
import {ScrollView, Text, View, Image, StyleSheet, TouchableO, ScrollViewpacity} from 'react-native'
import TreatmentHistoryCard from '../components/TreatmentHistoryCard'

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

const GetStarted = () => {
  return (
    <ScrollView style={styles.container}>
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