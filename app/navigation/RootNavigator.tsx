import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainBottomTabs} from '../models/INavigationStack';
import MainStack from './MainStack';

const Tab = createBottomTabNavigator<MainBottomTabs>();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarLabel: 'MainStack',
        }}
      />
    </Tab.Navigator>
  );
}
