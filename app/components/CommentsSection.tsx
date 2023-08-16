import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Keyboard} from 'react-native';
import {useAppSelector} from '../store/hooks';
import {
  TComment,
  addComment,
  editComment,
  removeComment,
} from '../store/modules/comments/slice';

import {useAppDispatch} from '../store/hooks';
import Button from './Button';

interface IProps {
  postId: number | string;
}

export default function CommentsSection(props: IProps) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.commentsSlice.comments);
  const [newComment, setNewComment] = useState<TComment>({
    id: Math.random(),
    postId: props.postId,
    text: '',
  });
  const [editCommentState, setEditCommentState] = useState<TComment>({
    id: '',
    postId: props.postId,
    text: '',
  });

  const currentPostComments = data.filter(
    comment => comment.postId === props.postId,
  );

  function onAddComment(comment: TComment) {
    dispatch(addComment(comment));
    resetComment();
    Keyboard.dismiss();
  }

  function onCreateComment(text: string) {
    setNewComment({
      id: Math.random(),
      postId: props.postId,
      text,
    });
  }
  function onEditComment(text: string) {
    setEditCommentState({
      ...editCommentState,
      text,
    });
  }

  function resetComment() {
    setNewComment({
      id: Math.random(),
      postId: props.postId,
      text: '',
    });
  }

  function onSaveComment(comment: TComment) {
    dispatch(editComment(comment));
    setEditMode(false);
  }
  function onEditCommentButton(u: TComment) {
    setEditCommentState(u);
    setEditMode(true);
  }

  function onRemoveComment(id: TComment['id']) {
    dispatch(removeComment(id));
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Add comment"
        value={newComment.text}
        onChangeText={(text: string) => onCreateComment(text)}
      />
      <Button
        fontSize={12}
        height={25}
        onPress={() => onAddComment(newComment)}>
        Save
      </Button>
      <View style={styles.commentsList}>
        {currentPostComments.map(u => (
          <View key={u.id} style={styles.commentContainer}>
            {editMode && editCommentState.id === u.id ? (
              <TextInput
                style={styles.inputStyle}
                value={editCommentState.text}
                onChangeText={text => onEditComment(text)}
              />
            ) : (
              <Text>{u.text}</Text>
            )}
            <View style={styles.buttons}>
              {editMode && editCommentState.id === u.id ? (
                <Button
                  fontSize={12}
                  height={25}
                  onPress={() => onSaveComment(editCommentState)}>
                  Save
                </Button>
              ) : (
                <Button
                  fontSize={12}
                  height={25}
                  onPress={() => onEditCommentButton(u)}>
                  Edit
                </Button>
              )}
              <Button
                fontSize={12}
                height={25}
                onPress={() => onRemoveComment(u.id)}>
                Remove
              </Button>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
  },
  commentsList: {marginTop: 20, paddingBottom: 30},
  commentContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  inputStyle: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    borderColor: 'lightgray',
  },
});
