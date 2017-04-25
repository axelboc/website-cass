import React from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";

import styles from "./index.css";

/**
 * Building block used to render the body of a Work entry along with an optional image.
 * By default, the image appears to the left of the body and the body takes up 
 * 61.5% of the available width on desktop (golden ratio).
 */
function Body(props, { metadata }) {
  const { assets, isImageRight, isHalfHalf, body } = props;
  const { imgUrl } = metadata;

  const rootClassName = isHalfHalf ? styles.rootHalfHalf : styles.root;
  const imgClassName = isImageRight ? styles.imageRight : styles.image;

  return (
    <div className={rootClassName}>
      {assets && (
        <div className={imgClassName}>
          <img src={`${imgUrl}/w_605,q_90/${assets[0]}`} />
        </div>
      )}
      <div className={styles.body}>
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

Body.contextTypes = {
  metadata: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired
  }).isRequired
};

export default Body;
