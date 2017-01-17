import React, { PropTypes } from 'react';
import { Link } from "phenomic";
import styles from './index.css';

const NavBar = ({ __filename, isIndex }, { metadata: { site } }) => (
  <div className={isIndex ? styles.navBarIndex : styles.navBar}>
    <p className={styles.title}>
      { isIndex
        ? site.initials
        : (<Link className={styles.titleLink} to="/">{site.title}</Link>)
      }
    </p>
    <ul className={isIndex ? styles.navInverted : styles.nav}>
      {site.nav.map(item => (
        <li key={item.filename} className={item.filename === __filename ? styles.navItemCurrent : styles.navItem}>
          <Link className={styles.navLink} to={item.path}>{item.label}</Link>
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
