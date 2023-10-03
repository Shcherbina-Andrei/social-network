import { FC } from 'react';
import styles from './sidebar.module.scss';
import Link from 'next/link';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import FeedIcon from '@/shared/assets/icons/feed.svg';
import FriendIcon from '@/shared/assets/icons/people.svg';
import MessagesIcon from '@/shared/assets/icons/messages.svg';
import MusicIcon from '@/shared/assets/icons/music.svg';
import { Routes } from '@/shared/router/routes';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`${styles.sidebar} ${className ? className : ''}`}>
      <Link className={styles.sidebar__link} href={Routes.Main}>
        <ProfileIcon width="30px" height="30px" />
        <span>Profile</span>
      </Link>
      <Link className={styles.sidebar__link} href={Routes.Friends}>
        <FriendIcon width="30px" height="30px" />
        <span>Friends</span>
      </Link>
      <Link className={styles.sidebar__link} href={Routes.Messages}>
        <MessagesIcon width="30px" height="30px" />
        <span>Messages</span>
      </Link>
    </div>
  );
};
export default Sidebar;
