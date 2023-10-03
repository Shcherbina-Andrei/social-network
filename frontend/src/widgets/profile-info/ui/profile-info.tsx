'use client';

import Image from 'next/image';
import styles from './profile-info.module.scss';
import profilePic from '@/shared/assets/images/profile.jpg';
import { Button } from '@/shared/ui/button';
import { getCurrentUser } from '@/entities/user/model/selectors/get-current-user';
import { useAppSelector } from '@/shared/lib/hooks/use-selector';

export const ProfileInfo = () => {
  const username = useAppSelector(getCurrentUser);
  if (!username) return <div>Loading</div>;

  return (
    <div className={styles.profileInfo__wrapper}>
      <Image
        className={styles.profileInfo__avatar}
        src={profilePic}
        alt="profile"
        priority={true}
        width={140}
        height={140}
      />
      <div className={styles.profileInfo__userInfo}>
        <h2 className={styles.profileInfo__name}>{username.username}</h2>
        <p className={styles.profileInfo__status}>I like coffee</p>
      </div>
      <div className={styles.profileInfo__controls}>
        <Button className={styles.profileInfo__editButton}>Edit Profile</Button>
      </div>
    </div>
  );
};
