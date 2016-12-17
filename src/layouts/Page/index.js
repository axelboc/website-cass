import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";

import Root from "../../components/Root";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";

const Page = (props) => {
  const { children, isLoading, head, body, __filename } = props;
  
  return !isLoading && (
    <Root head={head}>
      <NavBar __filename={__filename} />
      <Main>
        <Heading title={head.heading || head.title} subtitle={head.subtitle} />
        { children || <BodyContainer>{body}</BodyContainer> }
      </Main>
      <Footer />
    </Root>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
