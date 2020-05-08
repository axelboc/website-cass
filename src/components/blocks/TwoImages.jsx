import PropTypes from 'prop-types';
import React from 'react';

import { imgUrl } from '../../site.json';
import styles from './TwoImages.module.css';

/**
 * Two images inside a Work entry.
 */
function TwoImages(props) {
  const { images } = props;

  return (
    <div className={styles.root}>
      <div className={styles.leftImage}>
        <img src={`${imgUrl}/w_605,q_90/${images[0]}`} width="605" />
      </div>
      <div className={styles.rightImage}>
        <img src={`${imgUrl}/w_605,q_90/${images[1]}`} width="605" />
      </div>
    </div>
  );
}

TwoImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TwoImages;
