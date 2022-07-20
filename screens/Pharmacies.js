/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react'
import {SafeAreaView, Text, ScrollView, View, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native'

import PharmacyCard from '../components/PharmacyCard'
const pharmarcy = [
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

const Pharmacies = () => {
  return (
  <ScrollView style={styles.container}>
  {pharmarcy.map((p, i) => ( (<PharmacyCard key={i} name={p.name} address={p.address} distance={p.distance}/>) ))}
  </ScrollView>
  )
}

export default Pharmacies

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:5,
      backgroundColor: '#fff',
    },
  });