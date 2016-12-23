import React, { PropTypes } from "react";
import renderHTML from "react-render-html";

import styles from "./index.css";

const Work = ({ title, body }) => (
  <section className={styles.work}>
    <h2>{title}</h2>
    {body && renderHTML(body)}
  </section>
);

Work.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string
};

export default Work;
