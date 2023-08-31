import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
export default AppLayout;
