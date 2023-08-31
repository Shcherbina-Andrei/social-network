import Link from 'next/link';
import { FC } from 'react';
import styles from './navbar.module.scss';

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
          <Link href="/chats">Chats</Link>
          <Link href="/chats">Search</Link>
          <Link href="/chats">Messages</Link>
          <Link href="/chats">Notifications</Link>
          <div>Profile</div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
