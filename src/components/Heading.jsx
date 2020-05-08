import PropTypes from 'prop-types';
import React from 'react';

import styles from './Heading.module.css';

function Heading(props) {
  const { title, subtitle } = props;

  return (
    <h1 className={(subtitle && styles.withHeading) || styles.heading}>
      {title}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </h1>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Heading;
