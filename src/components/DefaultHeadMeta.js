import React, { PropTypes } from "react";
import Helmet from "react-helmet";

const DefaultHeadMeta = () => (
  <div hidden>
    <Helmet
      htmlAttributes={{ lang: "en" }}
      defaultTitle="Cassandra Frances"
      titleTemplate="%s | Cassandra Frances"
      meta={[
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ]}
      link={[
        { rel: "icon", type: "image/png", href: "/assets/favicon-32x32.png", sizes: "32x32" },
        { rel: "icon", type: "image/png", href: "/assets/favicon-16x16.png", sizes: "16x16" },
        { rel: "shortcut icon", href: "/assets/favicon.ico" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Princess+Sofia|Roboto:300,400" }
      ]}
      script={[
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated" },
      ]}
    />
  </div>
);

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default DefaultHeadMeta;
