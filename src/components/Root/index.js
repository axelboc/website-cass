import React, { PropTypes } from "react";
import Helmet from "react-helmet";
import styles from "./index.css";

const Root = (props) => {
  const { head, children } = props;

  const meta = [
    { name: "description", content: head.description }
  ];

  return (
    <div className={styles.root}>
      <Helmet
        title={head.title}
        meta={meta}
      />
      {children}
    </div>
  );
};

Root.propTypes = {
  head: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Root;
