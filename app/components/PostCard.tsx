import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TPost} from '../store/modules/api/posts/postsApi';
import Button from './Button';
import {useAppSelector} from '../store/hooks';

interface Props {
  post: TPost;
  onPress: () => void;
  onSave?: (item: TPost) => void;
  onRemove?: (id: TPost['id']) => void;
  editSuccessed?: boolean;
}

const PostCard: React.FC<Props> = ({
  post,
  onRemove,
  onSave,
  onPress,
  editSuccessed,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [postEdit, setPostEdit] = useState<TPost>({
    id: '',
    title: '',
    body: '',
  });

  useEffect(() => {
    editSuccessed && setEditMode(false);
  }, [editSuccessed]);

  const comments = useAppSelector(state => state.commentsSlice.comments);

  const commentsLength = comments.filter(
    comment => comment.postId === post.id,
  )?.length;

  function onEditModeHandler() {
    setEditMode(true);
    setPostEdit(post);
  }

  function onEditPostHandler(text: string, field: 'title' | 'body') {
    setPostEdit({...postEdit, [field]: text});
  }

  function onSaveHandler(data: TPost) {
    onSave && onSave(data);
    setEditMode(false);
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {editMode ? (
        <>
          <TextInput
            value={postEdit?.title}
            onChangeText={(text: string) => onEditPostHandler(text, 'title')}
          />
          <TextInput
            value={postEdit?.body}
            onChangeText={(text: string) => onEditPostHandler(text, 'body')}
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </>
      )}
      <View style={styles.buttons}>
        {onSave !== undefined && (
          <>
            {editMode ? (
              <Button
                fontSize={12}
                height={25}
                onPress={() => onSaveHandler(postEdit)}>
                Save
              </Button>
            ) : (
              <Button fontSize={12} height={25} onPress={onEditModeHandler}>
                Edit
              </Button>
            )}
          </>
        )}
        {onRemove && (
          <Button fontSize={12} height={25} onPress={() => onRemove(post.id)}>
            Remove Post
          </Button>
        )}
      </View>
      <View style={styles.commentsCounter}>
        <Text style={{fontSize: 12, color: '#555'}}>
          {commentsLength} Comments
        </Text>
      </View>
    </TouchableOpacity>
  );
};

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
    paddingBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentsCounter: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});

export default PostCard;
