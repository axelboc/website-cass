import React, { PropTypes } from "react";
import styles from "./index.css";

const Footer = (props, { metadata: { site } }) => (
  <footer className={styles.footer}>
    <ul className={styles.social}>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href="https://storm-the-form-of-a-girl.tumblr.com/">Tumblr</a>
      </li>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href="https://twitter.com/CassandraFrance">Twitter</a>
      </li>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href={site.contactFormURL}>Contact</a>
      </li>
    </ul>
  </footer>
);

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Footer;
