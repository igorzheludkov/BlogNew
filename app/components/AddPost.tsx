import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {TPost} from '../store/modules/api/posts/postsSlice';

interface AddPostProps {
  onAddPost: (post: TPost) => void;
}

const AddPost: React.FC<AddPostProps> = ({onAddPost}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddPost = () => {
    if (title && body) {
      const newPost: TPost = {
        id: Date.now().toString(),
        title,
        body,
      };
      onAddPost(newPost);
      setTitle('');
      setBody('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Add Post" onPress={handleAddPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default AddPost;
