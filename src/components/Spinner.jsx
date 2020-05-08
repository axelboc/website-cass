import React from 'react';

import styles from './Spinner.module.css';

const DOT_COUNT = 20;

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.inner}>
        {[...Array(DOT_COUNT)].map((_, index) => (
          <div className={styles.dot} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Spinner;
