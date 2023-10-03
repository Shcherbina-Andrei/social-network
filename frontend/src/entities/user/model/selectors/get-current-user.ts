import { RootState } from '@/core/providers/store-provider';

export const getCurrentUser = (state: RootState) => state.user.currentUser;
