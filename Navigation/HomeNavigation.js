/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation';
import COLORS from '../constants/Colors';
//import Onboarding from '../screens/Onboarding';
import OnboardingScreen from '../screens/OnboardScreen';
import GetStarted from '../screens/GetStarted';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import ServiceProviders from '../screens/ServiceProviders';
import TreatmentHistory from '../screens/TreatmentHistory';
import Pharmacies from '../screens/Pharmacies';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ServiceProviders"
      component={ServiceProviders}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Pharmacies"
      component={Pharmacies}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TreatmentHistory"
      component={TreatmentHistory}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigation;