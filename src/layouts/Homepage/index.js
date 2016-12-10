import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";
import Helmet from "react-helmet";
import Root from "../../components/Root";
import Banner from "../../components/Banner";
import Main from "../../components/Main";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";

const Homepage = (props) => {
  const { isLoading, head, body, __filename } = props;
  
  return !isLoading && (
    <Root head={head}>
      <Helmet titleTemplate="%s" />
      <Banner __filename={__filename} intro={head.intro} />
      <Main>
        <Heading title={head.heading} />
        <BodyContainer>{body}</BodyContainer>
      </Main>
      <Footer />
    </Root>
  );
};

Homepage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
};

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Homepage;
