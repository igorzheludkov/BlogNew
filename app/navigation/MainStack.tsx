import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PostsStackTypes} from '../models/INavigationStack';
import PostShowScreen from '../screens/MainStack/PostShowScreen';
import PostsFeedScreen from '../screens/MainStack/PostsFeedScreen';
import PostAddScreen from '../screens/MainStack/PostAddScreen';

const Stack = createNativeStackNavigator<PostsStackTypes>();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="PostsFeedScreen">
      <Stack.Screen
        name="PostsFeedScreen"
        component={PostsFeedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostShowScreen"
        component={PostShowScreen}
        options={{headerTitle: 'Post Show Screen'}}
      />
      <Stack.Screen
        name="PostAddScreen"
        component={PostAddScreen}
        options={{headerTitle: 'Post Add Screen'}}
      />
    </Stack.Navigator>
  );
}
