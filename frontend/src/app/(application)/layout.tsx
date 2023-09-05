import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import styles from './layout.module.scss';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
export default AppLayout;
