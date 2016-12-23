import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";
import Helmet from "react-helmet";

import Root from "../../components/Root";
import Banner from "../../components/Banner";
import Main from "../../components/Main";
import Heading from "../../components/Heading";
import About from "../../components/About";
import Footer from "../../components/Footer";

const Homepage = (props) => {
  const { isLoading, head, body, __filename } = props;
  
  return !isLoading && (
    <Root head={head}>
      <Helmet titleTemplate="%s" />
      <Banner __filename={__filename} intro={head.intro} />
      <Main>
        <Heading title={head.heading} />
        <About {...head.about}>
          <BodyContainer>{body}</BodyContainer>
        </About>
      </Main>
      <Footer />
    </Root>
  );
};

Homepage.propTypes = {
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  __filename: PropTypes.string,
};

export default Homepage;
