import React, { PropTypes } from "react";
import renderHTML from "react-render-html";

import styles from "./index.css";

const FourImages = ({ images, body }) => (
  <div className={styles.root}>
    <div className={styles.rowOne}>
      <img className={styles.mainImage} src={`/assets/work/${images[0]}`} />
      <div className={styles.sideImages}>
        <div style={{backgroundImage: `url(/assets/work/${images[1]})`}} />
        <div style={{backgroundImage: `url(/assets/work/${images[2]})`}} />
      </div>
    </div>
    <div className={styles.rowTwo}>
      <div className={styles.body}>{body && renderHTML(body)}</div>
      <img className={styles.lastImage} src={`/assets/work/${images[3]}`} />
    </div>
  </div>
);

FourImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  body: PropTypes.string.isRequired
};

export default FourImages;
