import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostsStackTypes} from '../../../models/INavigationStack';
import {View, Text, StyleSheet} from 'react-native';
import {useListPostQuery} from '../../../store/modules/api/posts/postsSlice';
import PostList from '../../../components/BlogRoll';
import Loader from '../../../components/Loader';
import Button from '../../../components/Button';

type Props = NativeStackScreenProps<PostsStackTypes, 'PostsFeedScreen'>;

export default function PostsFeedScreen({navigation}: Props) {
  const {data, error} = useListPostQuery();

  if (!data) {
    return <Loader />;
  }

  return (
    <View style={s.wrapper}>
      <Text style={s.title}>PostsFeedScreen</Text>
      {error ? <Text>Error</Text> : <PostList posts={data || []} />}
      <View style={s.addButton}>
        <Button
          bgColor={'lightblue'}
          borderColor={'lightblue'}
          fontColor={'white'}
          fontSize={16}
          borderRadius={15}
          height={50}
          borderWidth={1}
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
    right: 10,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
