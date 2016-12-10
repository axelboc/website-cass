import React from "react";
import styles from "./index.css";

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.social}>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href="https://storm-the-form-of-a-girl.tumblr.com/">Tumblr</a>
      </li>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href="https://twitter.com/CassandraFrance">Twitter</a>
      </li>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href="/contact">Contact</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
