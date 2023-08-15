import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TPost} from '../store/modules/api/posts/postsSlice';

// Define the props interface for the Card component
interface Props {
  post: TPost;
}

// Create the Card component using export default function syntax
const Card: React.FC<Props> = ({post}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#555',
  },
});

export default Card;
