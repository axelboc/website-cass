import React from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";

import styles from "./index.css";

/**
 * Building block used to render the body of a Work entry along with an optional image.
 * By default, the image appears to the left of the body and the body takes up 
 * 61.5% of the available width on desktop (golden ratio).
 */
function Body(props) {
  const { assets, isImageRight, isHalfHalf, body } = props;

  const imgClassName = isImageRight ? styles.imageRight : styles.image;
  const bodyClassName = isHalfHalf ? styles.bodyHalf : styles.body;

  return (
    <div className={styles.root}>
      {assets && (
        <div className={imgClassName}>
          <img src={`/assets/work/${assets[0]}`} />
        </div>
      )}
      <div className={bodyClassName}>
        <div>{body && renderHTML(body)}</div>
      </div>
    </div>
  );
}

Body.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.string),
  isImageRight: PropTypes.bool,
  isHalfHalf: PropTypes.bool,
  body: PropTypes.string.isRequired
};

Body.defaultProps = {
  isImageRight: false,
  isHalfHalf: false
};

export default Body;
