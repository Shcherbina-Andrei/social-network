import { AuthorizationStatus } from '@/shared/consts/authorization-status';
import { AuthSchema } from '../types/authorization';
import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh } from '../services/authorization-services';

const initialState: AuthSchema = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(refresh.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(refresh.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
