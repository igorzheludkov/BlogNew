import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostsStackTypes} from '../../../models/INavigationStack';
import {View, Text, StyleSheet} from 'react-native';
import AddPost from '../../../components/AddPost';

type Props = NativeStackScreenProps<PostsStackTypes, 'PostAddScreen'>;

export default function PostAddScreen({navigation}: Props) {
  return (
    <View style={s.wrapper}>
      <Text style={s.title}>PostAddScreen</Text>
      <AddPost onAddPost={item => console.log(item)} />
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 20, paddingVertical: 20},
});
