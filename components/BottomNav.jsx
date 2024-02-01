import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNav = ({renderIcon}) => {

    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={PomodoreScreen} />
        <Tab.Screen name="Garden" component={GardenScreen} />
      </Tab.Navigator>
      );
    };

export default BottomNav;
