import site from '../site.json';
import styles from './Footer.module.css';

const { contactFormUrl } = site;

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li className={styles.socialSite}>
          <a
            className={styles.socialLink}
            href="https://storm-the-form-of-a-girl.tumblr.com/"
          >
            Tumblr
          </a>
        </li>
        <li className={styles.socialSite}>
          <a
            className={styles.socialLink}
            href="https://twitter.com/Cass_Frances_"
          >
            Twitter
          </a>
        </li>
        <li className={styles.socialSite}>
          <a className={styles.socialLink} href={contactFormUrl}>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
