import React from "react";
import { Route } from "react-router";
import { PageContainer as PhenomicPageContainer } from "phenomic";

import AppContainer from "./AppContainer";
import Page from "./layouts/Page";
import Homepage from "./layouts/Homepage";
import Immersive from "./layouts/Immersive";

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      Homepage,
      Immersive
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
);
