import React, { PropTypes } from 'react';
import Degree from '../Degree';
import styles from './index.css';

const About = ({ portrait, degrees, children }) => (
  <div className={styles.about}>
    <div className={styles.body}>
      {children}
    </div>
    <div className={styles.resume}>
      <img 
        className={styles.portrait}
        src={portrait.src}
        alt={portrait.alt}
        width={portrait.width}
        height={portrait.height} />
      <div className={styles.academia}>
        {degrees.map((degree, i) => <Degree key={i} {...degree} />)}
      </div>
    </div>
  </div>
);

About.propTypes = {
  portrait: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  degrees: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node
};

export default About;
