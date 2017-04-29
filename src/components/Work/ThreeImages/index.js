import React from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

/**
 * Three images inside a Work entry.
 */
function ThreeImages(props, { metadata }) {
  const { assets } = props;
  const { imgUrl } = metadata;

  return (
    <div className={styles.root}>
      <div className={styles.mainImage}>
        <img src={`${imgUrl}/w_575,q_90/${assets[0]}`} />
      </div>
      <div className={styles.sideImages}>
        <div style={{backgroundImage: `url(${imgUrl}/w_355,q_90/${assets[1]})`}} />
        <div style={{backgroundImage: `url(${imgUrl}/w_355,q_90/${assets[2]})`}} />
      </div>
    </div>
  );
}

ThreeImages.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.string).isRequired
};

ThreeImages.contextTypes = {
  metadata: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired
  }).isRequired
};

export default ThreeImages;
