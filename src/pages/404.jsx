import Heading from '../components/Heading';
import { getImgSrc } from '../utils';
import styles from './404.module.css';

function NotFound() {
  return (
    <>
      <Heading title="Are you lost?" />
      <img
        className={styles.image}
        sizes="100w"
        src={getImgSrc('404', 1500, 700)}
        srcSet={[
          [500, 300],
          [1000, 500],
          [1500, 700],
        ]
          .map((dims) => getImgSrc('404', ...dims, true))
          .join(',')}
        alt="Woman sitting in the middle of a path in a misty forest, her arms wrapped around her legs and her face obscured by her hair."
      />
    </>
  );
}

export default NotFound;
