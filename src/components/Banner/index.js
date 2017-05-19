import React, { Component } from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";

import { connect } from "react-redux";
import { setBannerAnimated } from "../../state/actions";

import NavBar from "../NavBar";
import styles from "./index.css";

class Banner extends Component {

  componentWillUnmount() {
    // Mark banner as animated when leaving
    this.props.setBannerAnimated();
  }
  
  render() {
    const { __filename, isLoading, intro, bannerAnimated } = this.props;
    const { metadata: { siteTitle } } = this.context;

    return (
      <header className={bannerAnimated ? styles.banner : styles.animatedBanner}>
        <NavBar __filename={__filename} isIndex />
        { !isLoading &&
          <div className={styles.inner}>
            <h1 className={styles.title}>{siteTitle}</h1>
            <p className={styles.intro}>{renderHTML(intro)}</p>
          </div>
        }
      </header>
    );
  }

}

Banner.propTypes = {
  __filename: PropTypes.string,
  isLoading: PropTypes.bool,
  intro: PropTypes.string.isRequired,
  bannerAnimated: PropTypes.bool.isRequired,
  setBannerAnimated: PropTypes.func.isRequired
};

Banner.contextTypes = {
  metadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({ bannerAnimated }) => ({ bannerAnimated });
const mapDispatchToProps = (dispatch) => ({
  setBannerAnimated: () => dispatch(setBannerAnimated())
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
