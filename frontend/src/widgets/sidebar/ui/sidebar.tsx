import { FC } from 'react';
import styles from './sidebar.module.scss';
import Link from 'next/link';
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
      <Link href={Routes.Main}>
        <FeedIcon width="40px" height="40px" />
      </Link>
      <Link href={Routes.Friends}>
        <FriendIcon width="40px" height="40px" />
      </Link>
      <Link href={Routes.Messages}>
        <MessagesIcon width="40px" height="40px" />
      </Link>
      <Link href={Routes.Music}>
        <MusicIcon width="40px" height="40px" />
      </Link>
    </div>
  );
};
export default Sidebar;
