import React from 'react';
import styles from './index.css';
import Spinner from '../Spinner';

const Loading = () => (
  <div className={styles.loading}>
    <Spinner />
  </div>
);

export default Loading;
