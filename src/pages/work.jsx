import { MDXProvider } from '@mdx-js/react';

import Heading from '../components/Heading';
import HeadMeta from '../components/HeadMeta';
import WorkList from '../content/WorkList.mdx';
import { NewTabLink } from '../utils';
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
          <MDXProvider components={{ a: NewTabLink }}>
            <WorkList />
          </MDXProvider>
        </div>
      </div>
    </>
  );
}

export default Work;
