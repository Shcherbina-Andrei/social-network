'use client';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import styles from './layout.module.scss';
import { useTheme } from '@/core/providers/theme-provider';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
export default AppLayout;
