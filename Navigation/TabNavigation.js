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
import { HomeIcon, ClipboardListIcon, OfficeBuildingIcon} from "react-native-heroicons/solid";
//import doctor from "../assets/images/doctor.png";
//import history from "../assets/images/history.png";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) =>({
          headerShown:false,
          tabBarShowLabel:false,
          //tabBarBackground:COLORS.green,
          tabBarStyle:{
            backgroundColor:COLORS.red,
            height:60,
          },
            tabBarIcon: ({ focused, color, size }) => {
              let IconName;
              if(route.name === 'Profile'){
                IconName = 'home';
                size=focused? 40: 35;
                color= focused ? COLORS.white : COLORS.gray;
              }else if(route.name === 'Service Providers'){
                IconName = 'user-md'
                size=focused? 40: 35;
                color= focused ? COLORS.white : COLORS.gray;
              }else if(route.name === 'Treatment History'){
                IconName = 'clipboard';
                size=focused? 40: 35;
                color= focused ? COLORS.white : COLORS.gray;
              }
              return (
                <>
                  <FontAwesome5
                   name={IconName}
                   color={color}
                   size={size}
                  />
                </>
              )
            }
        })}
        >
            <Tab.Screen name="Profile" component={Profile}
            />
            <Tab.Screen name="Service Providers" component={ServiceProviders} 
            />
            <Tab.Screen name="Treatment History" component={TreatmentHistory}
            />
        </Tab.Navigator>
    )
};

export default TabNavigator;