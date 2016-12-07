import React, { PropTypes } from 'react';
import styles from './index.css';

const NavBar = ({ __filename, isIndex }, { metadata: { site } }) => (
  <div className={isIndex ? styles.navBarIndex : styles.navBar}>
    <p className={styles.title}>
      { isIndex
        ? site.initials
        : (<a className={styles.titleLink} href="/">{site.title}</a>)
      }
    </p>
    <ul className={isIndex ? styles.navInverted : styles.nav}>
      {site.nav.map(item => (
        <li key={item.filename} className={item.filename === __filename ? styles.navItemCurrent : styles.navItem}>
          <a className={styles.navLink} href={item.path}>{item.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

NavBar.propTypes = {
  __filename: PropTypes.string,
  isIndex: PropTypes.bool
};

NavBar.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default NavBar;
