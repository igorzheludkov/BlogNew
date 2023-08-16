import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostsStackTypes} from '../../../models/INavigationStack';
import {View, Text, StyleSheet} from 'react-native';
import PostList from '../../../components/BlogRoll';
import Button from '../../../components/Button';

type Props = NativeStackScreenProps<PostsStackTypes, 'PostsFeedScreen'>;

export default function PostsFeedScreen({navigation}: Props) {
  return (
    <View style={s.wrapper}>
      <Text style={s.title}>Posts Feed Screen</Text>
      <PostList />
      <View style={s.addButton}>
        <Button
          bgColor={'lightgray'}
          borderColor={'gray'}
          fontColor={'black'}
          fontSize={16}
          borderRadius={15}
          height={50}
          width={150}
          borderWidth={0}
          onPress={() => navigation.navigate('PostAddScreen')}>
          Add Post
        </Button>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {fontSize: 20, paddingVertical: 20},
  addButton: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
