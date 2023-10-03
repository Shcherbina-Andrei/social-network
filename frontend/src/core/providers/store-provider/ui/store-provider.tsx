'use client';

import { FC, ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch';
import { refresh } from '@/features/authorization/model/services/authorization-services';

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
