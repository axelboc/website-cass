import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";

import Root from "../../components/Root";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import styles from "./index.css";

const Immersive = (props) => {
  const { isLoading, head, body } = props;
  
  return !isLoading && (
    <Root head={head}>
      <Main>
        <div className={styles.immersive}>
          <header className={styles.header}>
            <h1 className={styles.heading}>{head.title}</h1>
            <p className={styles.byline}>{head.byline}</p>
          </header>
          <BodyContainer>{body}</BodyContainer>
        </div>
      </Main>
      <Footer />
    </Root>
  );
};

Immersive.propTypes = {
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
};

export default Immersive;
