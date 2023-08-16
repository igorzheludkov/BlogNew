import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostsStackTypes} from '../../../models/INavigationStack';
import {View, StyleSheet} from 'react-native';
import AddPost from '../../../components/AddPost';
import {useAddPostMutation} from '../../../store/modules/api/posts/postsApi';

type Props = NativeStackScreenProps<PostsStackTypes, 'PostAddScreen'>;

export default function PostAddScreen({navigation}: Props) {
  const [addPost, {isSuccess}] = useAddPostMutation();

  useEffect(() => {
    isSuccess && navigation.goBack();
  }, [isSuccess, navigation]);

  return (
    <View style={s.wrapper}>
      <View style={s.container}>
        <AddPost onAddPost={payload => addPost({payload})} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {flex: 1, paddingHorizontal: 10, paddingTop: 10},
  container: {padding: 10, backgroundColor: '#fff', borderRadius: 5},
  title: {fontSize: 20, paddingVertical: 20},
});
