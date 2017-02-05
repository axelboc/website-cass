import React, { PropTypes } from "react";
import renderHTML from "react-render-html";
import FourImages from "./FourImages";

import styles from "./index.css";

const CONTENT_COMPONENTS = {
  FourImages
};

const Work = ({ title, component, assets = {}, body }) => (
  <section className={styles.work}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>
      {renderContent(component, assets, body)}
    </div>
  </section>
);

function renderContent(component, assets, body) {
  const Content = CONTENT_COMPONENTS[component];
  return Content
    ? <Content {...assets} body={body} />
    : body && renderHTML(body);
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.string,
  assets: PropTypes.object,
  read: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  body: PropTypes.string
};

export default Work;
