'use client';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import styles from './layout.module.scss';
import { AuthProtection } from '@/core/route-protection';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProtection>
      <div className="app">
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </AuthProtection>
  );
};
export default AppLayout;
