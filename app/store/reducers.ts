import {apiSlice} from './modules/api/apiSlice';
import postsSlice from './modules/posts/slice';
import commentsSlice from './modules/comments/slice';

export default {
  [apiSlice.reducerPath]: apiSlice.reducer,
  postsSlice,
  commentsSlice,
};
