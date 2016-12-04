import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";

import Root from "../../components/Root";
import Banner from "../../components/Banner";

const Homepage = (props) => {
  const { isLoading, head, body } = props;

  return !isLoading && (
    <Root head={head}>
      <Banner intro={head.intro} />
      <BodyContainer>{body}</BodyContainer>
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
