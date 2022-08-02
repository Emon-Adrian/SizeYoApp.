/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation';
import COLORS from '../constants/Colors';
//import Onboarding from '../screens/Onboarding';
import OnboardingScreen from '../screens/OnboardScreen';
import GetStarted from '../screens/GetStarted';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigation;