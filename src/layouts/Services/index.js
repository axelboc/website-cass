import React from "react";
import PropTypes from "prop-types";
import { BodyContainer } from "phenomic";

import Page from "../Page";
import Service from "../../components/Service";

import services from "../../../collections/services";
import styles from "./index.css";

function Services(props, { metadata }) {
  const { body } = props;

  return (
    <Page {...props}>
      <div className={styles.root}>
        <div className={styles.body}>
          {body && <BodyContainer>{body}</BodyContainer>}
        </div>
        <hr className={styles.separator} />
        <div className={styles.services}>
          <div className={styles.left}>
            {services.slice(0, 2).map((service, i) => (
              <Service key={i} {...service} />
            ))}
          </div>
          <div className={styles.right}>
            <a className={styles.cta} href={metadata.contactFormUrl}>Get in touch!</a>
            <Service {...services[2]} />
          </div>
        </div>
      </div>
    </Page>
  );
}

Services.propTypes = {
  body: PropTypes.string
};

Services.contextTypes = {
  metadata: PropTypes.shape({
    contactFormUrl: PropTypes.string.isRequired
  }).isRequired
};

export default Services;
