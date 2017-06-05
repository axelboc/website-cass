import React from "react";
import PropTypes from "prop-types";
import { BodyContainer } from "phenomic";

import Page from "../Page";
import Degree from "../../components/Degree";

import styles from "./index.css";

function Homepage(props, { metadata }) {
  const { head: { about: { portrait, degrees } }, body } = props;
  const { imgUrl } = metadata;

  return (
    <Page {...props}>
      <div className={styles.about}>
        <div className={styles.body}>
          {body && <BodyContainer>{body}</BodyContainer>}
        </div>
        <div className={styles.resume}>
          <img 
            className={styles.portrait}
            src={`${imgUrl}/w_${portrait.width},q_90/${portrait.src}`}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height} />
          <div className={styles.academia}>
            {degrees.map((degree, i) => <Degree key={i} {...degree} />)}
          </div>
        </div>
      </div>
    </Page>
  );
}

Homepage.propTypes = {
  head: PropTypes.shape({
    about: PropTypes.shape({
      portrait: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      degrees: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
  body: PropTypes.string,
};

Homepage.contextTypes = {
  metadata: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired
  }).isRequired
};

export default Homepage;
