import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/igorzheludkov/fakeServer',
  }),
  tagTypes: ['Posts'],
  endpoints: () => ({}),
});

export default apiSlice;
