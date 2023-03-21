import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.header}>
      <Link href="/" className={pathname === '/' ? styles.active : ''}>
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === '/about' ? styles.active : ''}
      >
        About page
      </Link>
    </div>
  );
};
