import apiSlice from '../apiSlice';

export const postsApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    listComment: build.query<TPost[], void>({
      providesTags: ['Posts'],
      query: () => '/posts/',
    }),
    addComment: build.mutation<string, {payload: TPost}>({
      invalidatesTags: ['Posts'],
      query: ({payload}) => ({
        body: {
          ...payload,
        },
        method: 'POST',
        url: '/posts/',
      }),
    }),
    updateComment: build.mutation<string, {payload: TPost}>({
      invalidatesTags: ['Posts'],
      query: ({payload}) => ({
        body: {
          ...payload,
        },
        method: 'PATCH',
        url: `/posts/${payload.id}/`,
      }),
    }),
    removeComment: build.mutation<string, {id: string}>({
      invalidatesTags: ['Posts'],
      query: ({id}) => ({
        method: 'DELETE',
        url: `/posts/${id}/`,
      }),
    }),
  }),
  overrideExisting: false,
});

export default postsApi;

export const {
  useListCommentQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useRemoveCommentMutation,
} = postsApi;

export type TPost = {
  id: string;
  title: string;
  body: string;
};
export type TComment = {
  id: string;
  title: string;
  body: string;
};
