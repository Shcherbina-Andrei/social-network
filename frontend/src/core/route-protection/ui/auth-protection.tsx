'use client';

import { getAuthStatus } from '@/features/authorization';
import { AuthorizationStatus } from '@/shared/consts/authorization-status';
import { useAppSelector } from '@/shared/lib/hooks/use-selector';
import { Routes } from '@/shared/router/routes';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export const AuthProtection = ({ children }: { children: ReactNode }) => {
  const authStatus = useAppSelector(getAuthStatus);
  if (authStatus === AuthorizationStatus.Unknown) {
    return <div>Loading...</div>;
  }
  if (authStatus === AuthorizationStatus.NoAuth) {
    redirect(Routes.Login);
  }
  return <>{children}</>;
};
