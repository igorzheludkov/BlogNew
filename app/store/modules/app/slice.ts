import {createSlice} from '@reduxjs/toolkit';

export interface AppState {
  app: any[] | undefined;
}

const initialState: AppState = {
  app: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export default appSlice.reducer;
