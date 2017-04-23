import React from "react";
import Helmet from "react-helmet";
import ProgressIndicator from "react-topbar-progress-indicator";
import Spinner from "../Spinner";
import styles from "./index.css";

ProgressIndicator.config({
  barThickness: 2,
  shadowBlur: 8,
  shadowColor: "rgba(32, 32, 48, 0.5)",
  barColors: {
    "0": "#af3636",
  }
});

const Loading = () => (
  <div className={styles.loading}>
    <Helmet title="Loading..." />
    <ProgressIndicator />
    <Spinner />
  </div>
);

export default Loading;
