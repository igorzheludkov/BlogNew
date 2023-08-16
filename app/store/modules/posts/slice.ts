import {createSlice} from '@reduxjs/toolkit';
import {TPost} from '../api/posts/postsApi';

export interface AppState {
  posts: TPost[];
  newPost: TPost | null;
}

const initialState: AppState = {
  posts: [],
  newPost: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts: (state, action: {payload: TPost[]}) => {
      const newItems = action.payload.filter(
        newItem =>
          !state.posts.some(existingItem => existingItem.id === newItem.id),
      );
      state.posts.push(...newItems);
    },
    addPost: (state, action: {payload: TPost}) => {
      console.log('addPost action.payload', action.payload);
      state.posts = [action.payload, ...state.posts];
    },
    newPost: (state, action: {payload: TPost | null}) => {
      state.newPost = action.payload;
    },
    removePost: (state, action: {payload: number | string}) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    editPost: (state, action: {payload: TPost}) => {
      const findPostIndex = state.posts.findIndex(
        item => item.id === action.payload.id,
      );

      state.posts[findPostIndex] = action.payload;
    },
  },
});

export const {newPost, updatePosts, removePost, editPost, addPost} =
  postsSlice.actions;

export default postsSlice.reducer;
