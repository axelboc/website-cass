import React, { PropTypes } from "react";
import renderHTML from "react-render-html";
import NavBar from "../NavBar";
import styles from "./index.css";

const Banner = ({ __filename, intro }, { metadata: { site } }) => (
  <header className={styles.banner}>
    <NavBar __filename={__filename} isIndex />
    <div className={styles.inner}>
      <h1 className={styles.title}>{site.title}</h1>
      <p className={styles.intro}>{renderHTML(intro)}</p>
    </div>
  </header>
);

Banner.propTypes = {
  __filename: PropTypes.string,
  intro: PropTypes.string.isRequired
};

Banner.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Banner;
