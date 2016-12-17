import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";

import Page from "../Page";
import Books from "../../components/Books";

const Nyctophilia = (props) => {
  const { isLoading, body } = props;
  
  return !isLoading && (
    <Page {...props}>
      <Books>
        <BodyContainer>{body}</BodyContainer>
      </Books>
    </Page>
  );
};

Nyctophilia.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
};

Nyctophilia.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Nyctophilia;
