import { useEffect } from 'react';

import site from '../site.json';
import styles from './Banner.module.css';
import NavBar from './NavBar';

const { siteTitle } = site;
let hasAnimated = false;

function Banner() {
  useEffect(() => {
    hasAnimated = true;
  }, []);

  return (
    <header className={hasAnimated ? styles.banner : styles.animatedBanner}>
      <NavBar />
      <div className={styles.inner}>
        <h1 className={styles.title}>{siteTitle}</h1>
        <p className={styles.intro}>
          Writer and professional pyjamas wearer.
          <br />
          Weaving the gothic into fantasy in young&nbsp;adult and children’s
          stories.
        </p>
      </div>
    </header>
  );
}

export default Banner;
