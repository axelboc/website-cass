import React, { PropTypes } from "react";
import { BodyContainer } from "phenomic";

import Root from "../../components/Root";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";

import Timeline from "../../containers/Timeline";
import Nyctophilia from "../../containers/Nyctophilia";

const containers = {
  Timeline,
  Nyctophilia
};

const Page = (props) => {
  const { isLoading, head, body, __filename } = props;
  const Container = head.container && containers[head.container];
  const bodyContainer = body && <BodyContainer>{body}</BodyContainer>;
  
  return !isLoading && (
    <Root head={head}>
      <NavBar __filename={__filename} />
      <Main>
        <Heading title={head.heading || head.title} subtitle={head.subtitle} />
        { Container
          ? <Container>{bodyContainer}</Container>
          : bodyContainer }
      </Main>
      <Footer />
    </Root>
  );
};

Page.propTypes = {
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  __filename: PropTypes.string,
};

export default Page;
