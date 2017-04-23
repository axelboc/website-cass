import React from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";

import Body from "./Body";
import ThreeImages from "./ThreeImages";

import styles from "./index.css";

const BLOCKS = {
  Body,
  ThreeImages
};

function Work(props) {
  const { title, blocks, body } = props;

  return (
    <section className={styles.work}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {blocks.map((b, i) => {
          const Block = BLOCKS[b.layout];
          return Block
            ? <Block key={i} {...b} body={body} />
            : body && renderHTML(body);
        })}
      </div>
    </section>
  );
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      layout: PropTypes.string.isRequired,
      assets: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  read: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  body: PropTypes.string
};

export default Work;
