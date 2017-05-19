import React from "react";

import Page from "../Page";
import Work from "../../components/Work";

import works from "../../../collections/works";
import styles from "./index.css";

function Timeline(props) {
  return (
    <Page {...props}>
      <div className={styles.timeline}>
        <div className={styles.inner}>
          {works.map((work, i) => (
            <Work key={i} {...work} />
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Timeline;
