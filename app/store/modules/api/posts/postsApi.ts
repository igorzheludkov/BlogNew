import apiSlice from '../apiSlice';
import {addPost, editPost, removePost, updatePosts} from '../../posts/slice';

export const postsApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    listPost: build.query<TPost[], void>({
      providesTags: ['Posts'],
      query: () => '/posts/',
      async onQueryStarted(undefined, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          dispatch(updatePosts(result.data));
        } catch (e) {}
      },
    }),
    addPost: build.mutation<string, {payload: TPost}>({
      invalidatesTags: ['Posts'],
      query: ({payload}) => ({
        body: {
          ...payload,
        },
        method: 'POST',
        url: '/posts/',
      }),
      async onQueryStarted({payload}, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          result && dispatch(addPost(payload));
        } catch (e) {}
      },
    }),
    editPost: build.mutation<string, {payload: TPost}>({
      invalidatesTags: ['Posts'],
      query: ({payload}) => ({
        body: {
          ...payload,
        },
        method: 'PATCH',
        url: `/posts/${payload.id}/`,
      }),
      async onQueryStarted({payload}, {dispatch}) {
        dispatch(editPost(payload));
      },
    }),
    removePost: build.mutation<string, {id: string}>({
      invalidatesTags: ['Posts'],
      query: ({id}) => ({
        method: 'DELETE',
        url: `/posts/${id}/`,
      }),
      async onQueryStarted({id}, {dispatch}) {
        dispatch(removePost(id));
      },
    }),
  }),
  overrideExisting: false,
});

export default postsApi;

export const {
  useListPostQuery,
  useAddPostMutation,
  useEditPostMutation,
  useRemovePostMutation,
} = postsApi;

export type TPost = {
  id: string;
  title: string;
  body: string;
};
