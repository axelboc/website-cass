import React, { PropTypes } from "react";
import renderHTML from "react-render-html";

import Max from "../Max";
import styles from "./index.css";

const Banner = ({ intro }, { metadata: { site } }) => (
  <header className={styles.banner}>
    {/* header */}
    <div className={styles.inner}>
      <h1 className={styles.title}>{site.title}</h1>
      <Max>
        <p className={styles.intro}>{renderHTML(intro)}</p>
      </Max>
    </div>
  </header>
);

Banner.propTypes = {
  intro: PropTypes.string.isRequired
};

Banner.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Banner;
