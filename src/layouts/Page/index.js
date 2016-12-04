import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";
import Root from "../../components/Root";

const Page = (props) => {
  const { head, body } = props;

  return (
    <Root head={head}>
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
