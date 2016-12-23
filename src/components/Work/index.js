import React, { PropTypes } from "react";
import { Link } from "phenomic";
import renderHTML from "react-render-html";

import styles from "./index.css";

const Work = ({ title, read, body }) => (
  <section className={styles.work}>
    <h2>{title}</h2>
    {body && renderHTML(body)}
    {read && <Link to={read.url}>{read.label}</Link>}
  </section>
);

Work.propTypes = {
  title: PropTypes.string.isRequired,
  read: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  body: PropTypes.string
};

export default Work;
