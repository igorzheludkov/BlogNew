import {apiSlice} from './modules/api/apiSlice';
import appSlice from './modules/app/slice';

export default {
  [apiSlice.reducerPath]: apiSlice.reducer,
  appSlice,
};
