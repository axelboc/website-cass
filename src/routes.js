import React from "react";
import { Route } from "react-router";
import { PageContainer as PhenomicPageContainer } from "phenomic";

import AppContainer from "./AppContainer";
import Page from "./layouts/Page";
import Homepage from "./layouts/Homepage";
import Timeline from "./layouts/Timeline";
import Nyctophilia from "./layouts/Nyctophilia";
import Immersive from "./layouts/Immersive";

function PageContainer(props) {
  return (
    <PhenomicPageContainer
      { ...props }
      layouts={{
        Page,
        Homepage,
        Timeline,
        Nyctophilia,
        Immersive
      }}
    />
  );
}

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
);
