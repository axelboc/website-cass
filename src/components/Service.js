import React from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";

import styles from "./service.css";

function Service(props) {
  const { meta, html } = props;
  const { title, fee, turnaround} = meta;

  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>{title}</h2>
      {renderHTML(html)}
      <ul className={styles.details}>
        <li className={styles.item}>
          <div className={styles.itemLabel}>Fee</div>
          <div className={styles.itemValue}>{
            typeof fee === 'string'
              ? fee
              : fee.map(f => <div>{f}</div>)
          }</div>
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
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fee: PropTypes.oneOfType(PropTypes.string, PropTypes.arrayOf(PropTypes.string)).isRequired,
    turnaround: PropTypes.string.isRequired,
  }).isRequired,
  html: PropTypes.string.isRequired,
};

export default Service;
