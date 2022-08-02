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
import { HomeIcon, ClipboardListIcon, OfficeBuildingIcon } from "react-native-heroicons/solid";
//import doctor from "../assets/images/doctor.png";
//import history from "../assets/images/history.png";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            //tabBarBackgroundColor:COLORS.red,
        }}
        
        >
            <Tab.Screen name="Profile" component={Profile}
              options={{
                tabBarIcon: ({}) => (
                    <View>
                        <HomeIcon color={COLORS.red} size={36} />
                    </View>
                )
              }}
            />
            <Tab.Screen name="Service Providers" component={ServiceProviders} 
              options={{
                tabBarIcon: ({}) => (
                    <View>
                      <OfficeBuildingIcon color={COLORS.red} size={36} />
                    </View>
                )
              }}
            />
            <Tab.Screen name="Treatment History" component={TreatmentHistory}
            options={{
              tabBarIcon: ({}) => (
                  <View>
                    <ClipboardListIcon  color={COLORS.red} size={36} />
                  </View>
              )
            }} 
            />
        </Tab.Navigator>
    )
};

export default TabNavigator;