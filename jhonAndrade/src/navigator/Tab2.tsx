import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {stackParams} from './Tab1';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';

const Tab2 = createStackNavigator<stackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name="DetailScreen" component={DetailScreen} />
    </Tab2.Navigator>
  );
};
