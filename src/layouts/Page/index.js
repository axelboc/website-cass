import React from "react";
import PropTypes from "prop-types";
import { BodyContainer } from "phenomic";

import Root from "../../components/Root";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

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
  
  return (
    <Root head={head}>
      <NavBar __filename={__filename} />
      <Main>
        <Heading title={head.heading || head.title} subtitle={head.subtitle} />
        { isLoading
          ? <Loading />
          : <Container>{bodyContainer}</Container> }
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
