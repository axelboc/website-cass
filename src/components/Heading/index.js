import React from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

const Heading = ({ title, subtitle }) => (
  <h1 className={subtitle && styles.withHeading || styles.heading}>
    {title}
    { subtitle && <span className={styles.subtitle}>{subtitle}</span> }
  </h1>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Heading;
