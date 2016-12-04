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
        { rel: "apple-touch-icon-precomposed", href: "/favicon-196.png" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Princess+Sofia|Lato|Roboto:300,400" }
      ]}
      script={[
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
      ]}
    />
  </div>
);

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default DefaultHeadMeta;
