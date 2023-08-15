import apiSlice from '../apiSlice';

export const postsApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    listPost: build.query<TPost[], void>({
      providesTags: ['Posts'],
      query: () => '/posts/',
    }),
    addPost: build.mutation<string, {payload: Partial<TPost>; userId: string}>({
      invalidatesTags: ['Posts'],
      query: ({userId, payload}) => ({
        body: {
          user: userId,
          ...payload,
        },
        method: 'POST',
        url: '/posts/',
      }),
    }),
    updatePost: build.mutation<
      string,
      {payload: Partial<TPost>; userId: string}
    >({
      invalidatesTags: ['Posts'],
      query: ({userId, payload}) => ({
        body: {
          user: userId,
          ...payload,
        },
        method: 'PATCH',
        url: `/posts/${payload.id}/`,
      }),
    }),
    removePost: build.mutation<string, {id: string; userId: string}>({
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
  useListPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useRemovePostMutation,
} = postsApi;

export type TPost = {
  id: string;
  title: string;
  body: string;
};
