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
import Home from './screens/Home';
import { TailwindProvider } from "tailwindcss-react-native";
import OnboardScreen from './screens/OnboardScreen';
import GetStarted from './screens/GetStarted'
import Register from './screens/Register';
import GetOTP from './screens/GetOTP';

const Stack = createNativeStackNavigator();





const App: () => Node = () => {
 
  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator>
      <Stack.Screen
        name="OnboardScreen"
        component={OnboardScreen}
        options={{ title: 'Welcome', headerShown: false 
      }} 
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome', headerShown: false
      }} 
      />
      </Stack.Navigator>
      </TailwindProvider>
  </NavigationContainer>
  );
};

export default App;

