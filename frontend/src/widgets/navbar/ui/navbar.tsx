'use client';

import Link from 'next/link';
import { FC } from 'react';
import styles from './navbar.module.scss';
import SearchIcon from '@/shared/assets/icons/search.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Routes } from '@/shared/router/routes';
import { Dropdown } from '@/shared/ui/dropdown';
import DropdownItem from '@/shared/ui/dropdown/ui/dropdown-item';
import { Button } from '@/shared/ui/button';
import { ThemeSwitcher } from '@/widgets/theme-switcher';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`${styles.wrapper} ${className ? className : ''}`}>
      <nav className={styles.navbar}>
        <div>Social Network</div>
        <div className={styles.navbar__menu}>
          <ThemeSwitcher />
          <Dropdown>
            <DropdownItem value="Русский">Русский</DropdownItem>
            <DropdownItem value="English">English</DropdownItem>
          </Dropdown>
          <Link href="/">
            <SearchIcon width="30px" height="30px" />
          </Link>
          <Link href="/">
            <NotificationIcon width="30px" height="30px" />
          </Link>
          <Link href={Routes.Profile}>Profile</Link>
          <Button>Log out</Button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
