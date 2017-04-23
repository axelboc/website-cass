import React from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

/**
 * Building block used to render three images inside a Work entry.
 */
function ThreeImages(props) {
  const { assets } = props;

  return (
    <div className={styles.root}>
      <div className={styles.mainImage}>
        <img src={`/assets/work/${assets[0]}`} />
      </div>
      <div className={styles.sideImages}>
        <div style={{backgroundImage: `url(/assets/work/${assets[1]})`}} />
        <div style={{backgroundImage: `url(/assets/work/${assets[2]})`}} />
      </div>
    </div>
  );
}

ThreeImages.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ThreeImages;
