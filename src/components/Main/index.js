import React, { PropTypes } from "react";
import styles from "./index.css";

const Root = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);

Root.propTypes = {
  children: PropTypes.node
};

export default Root;
