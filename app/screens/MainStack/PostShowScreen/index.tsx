import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostsStackTypes} from '../../../models/INavigationStack';
import {View, Text, StyleSheet} from 'react-native';

type Props = NativeStackScreenProps<PostsStackTypes, 'PostShowScreen'>;

export default function PostShowScreen({navigation}: Props) {
  return (
    <View style={s.wrapper}>
      <Text style={s.title}>PostShowScreen</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 20, paddingVertical: 20},
});
