import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { siteTitle } from '../site.json';
import { useRouterState } from '../utils';
import styles from './NavBar.module.css';

const NAV_ITEMS = [
  { path: '/', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/work', label: 'Work' },
  { path: '/nyctophilia', label: 'Nyctophilia' },
];

function NavBar() {
  const { pathname } = useRouter();
  const { showHomeLayout } = useRouterState();

  return (
    <div className={showHomeLayout ? styles.navBarHome : styles.navBar}>
      <p className={styles.title}>
        {showHomeLayout ? (
          'CF'
        ) : (
          <Link href="/">
            <a className={styles.titleLink}>{siteTitle}</a>
          </Link>
        )}
      </p>
      <ul className={showHomeLayout ? styles.navInverted : styles.nav}>
        {NAV_ITEMS.map(({ path, label }) => (
          <li
            key={path}
            className={styles.navItem}
            data-active={path === pathname || undefined}
          >
            <Link href={path}>
              <a className={styles.navLink}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
