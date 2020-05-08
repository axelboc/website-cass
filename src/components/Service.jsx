import PropTypes from 'prop-types';
import React from 'react';

import styles from './Service.module.css';

function Service(props) {
  const { title, fee, turnaround, children } = props;

  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
      <ul className={styles.details}>
        <li className={styles.item}>
          <div className={styles.itemLabel}>Fee</div>
          <div className={styles.itemValue}>
            {typeof fee === 'string'
              ? fee
              : fee.map(f => <div key={f}>{f}</div>)}
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemLabel}>Turnaround</div>
          <div className={styles.itemValue}>{turnaround}</div>
        </li>
      </ul>
    </section>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  fee: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  turnaround: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Service;
