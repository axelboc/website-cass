import PropTypes from 'prop-types';

import site from '../../site.json';
import styles from './ThreeImages.module.css';

const { imgUrl } = site;

/**
 * Three images inside a Work entry.
 */
function ThreeImages(props) {
  const { images } = props;

  return (
    <div className={styles.root}>
      <div className={styles.mainImage}>
        <img src={`${imgUrl}/w_605,q_90/${images[0]}`} width="605" />
      </div>
      <div className={styles.sideImages}>
        <div
          style={{ backgroundImage: `url(${imgUrl}/w_355,q_90/${images[1]})` }}
        />
        <div
          style={{ backgroundImage: `url(${imgUrl}/w_355,q_90/${images[2]})` }}
        />
      </div>
    </div>
  );
}

ThreeImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreeImages;
