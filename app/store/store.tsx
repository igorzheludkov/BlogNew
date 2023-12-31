import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducers';
import apiSlice from './modules/api/apiSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [apiSlice.reducerPath],
  // whitelist: [''],
};

const persistedReducer = persistCombineReducers(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'authLogin/fulfilled',
          'authSignUp/fulfilled',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        ignoredPaths: ['authSlice.user'],
      },
    }).concat(apiSlice.middleware),
});

const persistor = persistStore(store);

export {store, persistor};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
