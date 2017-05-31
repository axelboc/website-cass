import React from "react";
import Page from "../Page";

import metadata from "../../metadata";
import styles from "./index.css";

const IMAGE_NAME = "404.jpg";

function PageError() {
  return (
    <Page head={{
      title: "Are you lost?"
    }}>
      <img 
        className={styles.image}
        sizes="100w"
        src={getImgSrc([1500, 700], false)}
        srcSet={[[500, 300], [1000, 500], [1500, 700]].map(getImgSrc).join(',')}
        alt="Woman sitting in the middle of a path in a misty forest, her arms wrapped around her legs and her face obscured by her hair."
      />
    </Page>
  );
}

function getImgSrc([w, h], index, withDescriptor = true) {
  const descriptor = withDescriptor ? ` ${w}w` : '';
  return `${metadata.imgUrl}/w_${w},h_${h},c_fill,g_south,q_90/${IMAGE_NAME}${descriptor}`;
}

export default PageError;
