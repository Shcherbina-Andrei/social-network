import { User } from '../types/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  currentUser: User | null;
}

const initialState: InitialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
