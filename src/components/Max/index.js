import React, { PropTypes } from "react";

import styles from "./index.css";

const Max = (props) => (
  <div className={styles.max}>
    {props.children}
  </div>
);

Max.propTypes = {
  children: PropTypes.node,
};

export default Max;
