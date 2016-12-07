import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";
import Root from "../../components/Root";
import NavBar from "../../components/NavBar";

const Page = (props) => {
  const { isLoading, head, body, __filename } = props;
  
  return !isLoading && (
    <Root head={head}>
      <NavBar __filename={__filename} />
      <BodyContainer>{ body }</BodyContainer>
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
