import { AuthRes, UserLogin, UserRegistration } from '../types/authorization';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '@/entities/user';
import { AxiosError, AxiosInstance } from 'axios';

export const registration = createAsyncThunk<
  void,
  UserRegistration,
  { extra: AxiosInstance }
>(
  'auth/registration',
  async (
    authData: UserRegistration,
    { extra: api, dispatch, rejectWithValue }
  ) => {
    try {
      const { data } = await api.post<AuthRes>('auth/registration', authData);
      localStorage.setItem('accessToken', data.accessToken);
      dispatch(userActions.setCurrentUser(data.user));
    } catch (err) {
      return rejectWithValue((err as AxiosError).response?.data);
    }
  }
);

export const login = createAsyncThunk<
  void,
  UserLogin,
  { extra: AxiosInstance }
>(
  'auth/login',
  async (authData: UserLogin, { dispatch, rejectWithValue, extra: api }) => {
    try {
      const { data } = await api.post<AuthRes>('auth/login', authData);
      localStorage.setItem('accessToken', data.accessToken);
      dispatch(userActions.setCurrentUser(data.user));
    } catch (err) {
      return rejectWithValue((err as AxiosError).response?.data);
    }
  }
);

export const logout = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('auth/logout', async (_arg, { dispatch, rejectWithValue, extra: api }) => {
  try {
    await api.get('auth/logout');
    dispatch(userActions.setCurrentUser(null));
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const refresh = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('auth/refresh', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<AuthRes>('auth/refresh');
  localStorage.setItem('accessToken', data.accessToken);
  dispatch(userActions.setCurrentUser(data.user));
});
