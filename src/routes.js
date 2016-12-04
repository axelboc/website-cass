import React from "react";
import { Route } from "react-router";
import { PageContainer as PhenomicPageContainer } from "phenomic";

import AppContainer from "./AppContainer";
import Page from "./layouts/Page";

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
);
