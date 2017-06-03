import React from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

/**
 * Two images inside a Work entry.
 */
function TwoImages(props, { metadata }) {
  const { assets } = props;
  const { imgUrl } = metadata;

  return (
    <div className={styles.root}>
      <div className={styles.leftImage}>
        <img src={`${imgUrl}/w_605,q_90/${assets[0]}`} width="605" />
      </div>
      <div className={styles.rightImage}>
        <img src={`${imgUrl}/w_605,q_90/${assets[1]}`} width="605" />
      </div>
    </div>
  );
}

TwoImages.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.string).isRequired
};

TwoImages.contextTypes = {
  metadata: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired
  }).isRequired
};

export default TwoImages;
