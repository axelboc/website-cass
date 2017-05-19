import React from "react";
import PropTypes from "prop-types";
import { Link } from "phenomic";
import styles from "./index.css";

function NavBar(props, { metadata }) {
  const { __filename, isIndex } = props;
  const { siteTitle } = metadata;

  return (
    <div className={isIndex ? styles.navBarIndex : styles.navBar}>
      <p className={styles.title}>
        { isIndex
          ? metadata.initials
          : (<Link className={styles.titleLink} to="/">{siteTitle}</Link>)
        }
      </p>
      <ul className={isIndex ? styles.navInverted : styles.nav}>
        {metadata.nav.map(item => (
          <li key={item.filename} className={item.filename === __filename ? styles.navItemCurrent : styles.navItem}>
            <Link className={styles.navLink} to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  __filename: PropTypes.string,
  isIndex: PropTypes.bool
};

NavBar.contextTypes = {
  metadata: PropTypes.shape({
    initials: PropTypes.string.isRequired,
    siteTitle: PropTypes.string.isRequired,
    nav: PropTypes.arrayOf(
      PropTypes.shape({
        filename: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default NavBar;
