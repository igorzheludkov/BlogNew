import {createSlice} from '@reduxjs/toolkit';

export type TComment = {
  postId: string | number;
  id: string | number;
  text: string;
};

export interface AppState {
  comments: TComment[];
  newComment: TComment | null;
}

const initialState: AppState = {
  comments: [],
  newComment: null,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: {payload: TComment}) => {
      state.comments = [action.payload, ...state.comments];
    },
    removeComment: (state, action: {payload: TComment['id']}) => {
      state.comments = state.comments.filter(
        item => item.id !== action.payload,
      );
    },
    editComment: (state, action: {payload: TComment}) => {
      const findCommentIndex = state.comments.findIndex(
        item => item.id === action.payload.id,
      );

      state.comments[findCommentIndex] = action.payload;
    },
  },
});

export const {addComment, removeComment, editComment} = commentsSlice.actions;

export default commentsSlice.reducer;
