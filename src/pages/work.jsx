import React from 'react';

import Heading from '../components/Heading';
import HeadMeta from '../components/HeadMeta';
import WorkList from '../content/WorkList.mdx';
import styles from './work.module.css';

function Work() {
  return (
    <>
      <Heading title="Work" />
      <HeadMeta
        title="Work"
        description="Want to know what I've been up to? Check out some of my work and achievements as an emerging young adult fiction writer."
      />
      <div className={styles.timeline}>
        <div className={styles.inner}>
          <WorkList />
        </div>
      </div>
    </>
  );
}

export default Work;
