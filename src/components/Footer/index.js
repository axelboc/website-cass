import React from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

const Footer = (props, { metadata }) => (
  <footer className={styles.footer}>
    <ul className={styles.social}>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href="https://storm-the-form-of-a-girl.tumblr.com/">Tumblr</a>
      </li>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href="https://twitter.com/Cass_Frances_">Twitter</a>
      </li>
      <li className={styles.socialSite}>
        <a className={styles.socialLink} href={metadata.contactFormUrl}>Contact</a>
      </li>
    </ul>
  </footer>
);

Footer.contextTypes = {
  metadata: PropTypes.shape({
    contactFormUrl: PropTypes.string.isRequired
  }).isRequired
};

export default Footer;
