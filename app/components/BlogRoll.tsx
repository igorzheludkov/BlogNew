import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PostCard from './PostCard';
import {
  TPost,
  useEditPostMutation,
  useListPostQuery,
  useRemovePostMutation,
} from '../store/modules/api/posts/postsApi';
import {useAppSelector} from '../store/hooks';
import Loader from './Loader';
import {useNavigation} from '@react-navigation/native';

const PostList: React.FC = () => {
  const navigation = useNavigation();
  const data = useAppSelector(state => state.postsSlice.posts);
  const {data: posts} = useListPostQuery();
  const [editPost] = useEditPostMutation();
  const [removePost] = useRemovePostMutation();

  function onSave(item: TPost) {
    editPost({payload: item});
    console.log('onSave', item);
  }

  function onRemove(id: TPost['id']) {
    removePost({id});
    console.log('onRemove');
  }

  const renderItem = ({item}: {item: TPost}) => (
    <PostCard
      post={item}
      onRemove={onRemove}
      onSave={onSave}
      editSuccessed={false}
      //@ts-ignore
      onPress={() => navigation.navigate('PostShowScreen', {id: item.id})}
    />
  );

  if (!data) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default PostList;
