import React, { PropTypes } from "react";

import DefaultHeadMeta from "./components/DefaultHeadMeta";
import "./index.global.css";

const AppContainer = (props) => (
  <div>
    <DefaultHeadMeta />
    { props.children }
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
