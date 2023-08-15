import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PostCard from './PostCard'; // Assuming your Card component is in a file named "Card.tsx"
import {TPost} from '../store/modules/api/posts/postsSlice';

// Define the interface for the post object
interface Props {
  posts: TPost[];
}

const PostList: React.FC<Props> = ({posts}) => {
  // Render function for each item in the FlatList
  const renderItem = ({item}: {item: TPost}) => <PostCard post={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default PostList;
