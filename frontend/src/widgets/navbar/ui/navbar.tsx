import Link from 'next/link';
import { FC } from 'react';
import styles from './navbar.module.scss';
import SearchIcon from '@/shared/assets/icons/search.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Routes } from '@/shared/router/routes';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`${styles.wrapper} ${className ? className : ''}`}>
      <nav className={styles.navbar}>
        <div>Social Network</div>
        <div className={styles.navbar__menu}>
          <button>English</button>
          <Link href="/">
            <SearchIcon width="30px" height="30px" />
          </Link>
          <Link href="/">
            <NotificationIcon width="30px" height="30px" />
          </Link>
          <Link href={Routes.Profile}>Profile</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
