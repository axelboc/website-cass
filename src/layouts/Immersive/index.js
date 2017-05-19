import React from "react";
import PropTypes from "prop-types";
import { BodyContainer } from "phenomic";

import Footer from "../../components/Footer";

import styles from "./index.css";

function Immersive(props) {
  const { isLoading, head, body } = props;
  
  return !isLoading && (
    <div>
      <main>
        <div className={styles.immersive}>
          <header className={styles.header}>
            <h1 className={styles.heading}>{head.title}</h1>
            <p className={styles.byline}>{head.byline}</p>
          </header>
          {body && <BodyContainer>{body}</BodyContainer>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

Immersive.propTypes = {
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
};

export default Immersive;
