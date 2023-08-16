import React, {useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostsStackTypes} from '../../../models/INavigationStack';
import {View, StyleSheet, ScrollView} from 'react-native';
import PostCard from '../../../components/PostCard';
import {useAppSelector} from '../../../store/hooks';
import CommentsSection from '../../../components/CommentsSection';

type Props = NativeStackScreenProps<PostsStackTypes, 'PostShowScreen'>;

export default function PostShowScreen({route}: Props) {
  const data = useAppSelector(state => state.postsSlice.posts);

  const item = useMemo(() => {
    return data.find(post => post.id === route.params.id);
  }, [data, route.params.id]);

  return (
    <View style={s.wrapper}>
      {item && (
        <ScrollView>
          <PostCard post={item} editSuccessed={false} onPress={() => {}} />
          <CommentsSection postId={route.params.id} />
        </ScrollView>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {flex: 1, paddingHorizontal: 10, paddingTop: 10},
  title: {fontSize: 20, paddingVertical: 20},
});
