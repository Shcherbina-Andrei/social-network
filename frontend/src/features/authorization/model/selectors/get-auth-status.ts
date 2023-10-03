import { RootState } from '@/core/providers/store-provider';

export const getAuthStatus = (state: RootState) =>
  state.auth.authorizationStatus;
