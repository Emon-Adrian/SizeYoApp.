/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';
import Profile from '../screens/Profile';
import PresentComplaint from '../screens/PresentComplaint';
import TreatmentHistory from '../screens/TreatmentHistory';
//import Pharmacies from '../screens/Pharmacies';
import ServiceProviders from '../screens/ServiceProviders';
import COLORS from '../constants/Colors';
import { HomeIcon } from "react-native-heroicons/solid";
import doctor from "../assets/images/doctor.png";
import history from "../assets/images/history.png";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
        }}
        >
            <Tab.Screen name="Profile" component={Profile}
              options={{
                tabBarIcon: ({}) => (
                    <View>
                        <HomeIcon color={COLORS.red} size={30} />
                    </View>
                )
              }}
            />
            <Tab.Screen name="Service Providers" component={ServiceProviders} 
              options={{
                tabBarIcon: ({}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image
                          source={require('./../assets/images/doctor.png')}
                          resizeMode="contain"
                          style={{width: 20, height: 20}}
                        />
                    </View>
                )
              }}
            />
            <Tab.Screen name="Treatment History" component={TreatmentHistory} 
            />
        </Tab.Navigator>
    )
};

export default TabNavigator;