import { IUserDataSingle } from '@/interfaces/user.interfce';
import styles from './user.module.scss';
import React from 'react';
import Link from 'next/link';

export const UserIten: React.FC<IUserDataSingle> = ({ user }) => {
  return (
    <>
      <div className={styles.item}>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.website}</p>
      </div>
      <br />
    </>
  );
};
