/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from "tailwindcss-react-native";
import HomeNavigation from './Navigation/HomeNavigation';

const Stack = createNativeStackNavigator();





const App: () => Node = () => {
 
  return (
    <NavigationContainer>
      <TailwindProvider>
         <HomeNavigation/>
      </TailwindProvider>
  </NavigationContainer>
  );
};

export default App;


