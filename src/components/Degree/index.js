import React, { PropTypes } from 'react';
import styles from './index.css';

const Degree = ({ title, uni, text }) => (
  <div className={styles.degree}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.uni}>{uni}</p>
    <p className={styles.text}>{text}</p>
  </div>
);

Degree.propTypes = {
  title: PropTypes.string.isRequired,
  uni: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Degree;
