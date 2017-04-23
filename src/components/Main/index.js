import React from "react";
import PropTypes from "prop-types";
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
