import React from "react";

import works from "../../../collections/works";
import Work from "../../components/Work";
import styles from "./index.css";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.inner}>
        {works.map((work, i) => (
          <Work key={i} {...work} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
