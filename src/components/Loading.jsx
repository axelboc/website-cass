import Head from 'next/head';
import ProgressIndicator from 'react-topbar-progress-indicator';

import styles from './Loading.module.css';
import Spinner from './Spinner';

ProgressIndicator.config({
  barThickness: 2,
  shadowBlur: 8,
  shadowColor: 'rgba(32, 32, 48, 0.5)',
  barColors: { 0: '#af3636' },
});

function Loading() {
  return (
    <div className={styles.loading}>
      <Head>
        <title>Loading...</title>
      </Head>
      <ProgressIndicator />
      <Spinner />
    </div>
  );
}

export default Loading;
