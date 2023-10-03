'use client';

import { NoAuthProtection } from '@/core/route-protection';
import styles from './auth-layout.module.scss';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NoAuthProtection>
      <div className={styles.authWrapper}>{children}</div>
    </NoAuthProtection>
  );
};
export default AuthLayout;
