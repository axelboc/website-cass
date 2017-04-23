import React from "react";
import styles from "./index.css";

const DOTS = 20;

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.inner}>
      {renderDots(DOTS)}
    </div>
  </div>
);

function renderDots(count) {
  let dots = [];

  for (let i = 0; i < count; i++) {
    dots.push(<div className={styles.dot} key={i} />);
  }
  
  return dots;
}

export default Spinner;
