import React from "react";
import PropTypes from "prop-types";

import HeadMeta from "../HeadMeta";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import styles from "./index.css";

function Page(props) {
  const { __url, __filename, isLoading, head, children } = props;
  
  // While loading, `__url` is nested inside the `head` object for some reason...
  const isHome = (head && head.__url || __url) === "/";
  
  return (
    <div className={styles.root}>
      <HeadMeta isHome={isHome} {...props} />
      { isHome
        ? <Banner __filename={__filename} isLoading={isLoading} intro={head.intro} />
        : <NavBar __filename={__filename} />
      }
      <main className={styles.main}>
        <Heading title={head.heading || head.title} subtitle={head.subtitle} />
        {isLoading ? <Loading /> : children}
      </main>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  __url: PropTypes.string,
  __filename: PropTypes.string,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
