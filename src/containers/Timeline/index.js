import React from "react";

import works from "../../../collections/works";
import Work from "../../components/Work";
import styles from "./index.css";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {works.map((work, i) => (
        <div className={styles.event} key={i}>
          <Work {...work} />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
