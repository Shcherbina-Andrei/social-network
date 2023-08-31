import { FC } from 'react';
import styles from './sidebar.module.scss';
import Link from 'next/link';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`${styles.sidebar} ${className ? className : ''}`}>
      <Link href="/">Friends</Link>
      <Link href="/">Messages</Link>
      <Link href="/">Music</Link>
    </div>
  );
};
export default Sidebar;
