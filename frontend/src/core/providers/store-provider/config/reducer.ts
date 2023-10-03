import { userReducer } from '@/entities/user';
import { authSlice } from '@/features/authorization/model/slice/auth-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  auth: authSlice.reducer,
  user: userReducer,
});
