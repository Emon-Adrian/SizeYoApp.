/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from "tailwindcss-react-native";
import OnboardScreen from '../screens/OnboardScreen';
import GetStarted from '../screens/GetStarted';



const Stack = createNativeStackNavigator();

const MainContainer = () => {
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
      name="GetStarted"
      component={GetStarted}
      options={{ title: 'Welcome', headerShown: false
    }} 
    />
    </Stack.Navigator>
    </TailwindProvider>
</NavigationContainer>
  )
}

export default MainContainer