import '../styles.css';
import '../utils.css';

import React from 'react';

import Layout from '../Layout';

export default function App(props) {
  // eslint-disable-next-line react/prop-types
  const { Component } = props;

  return (
    <Layout>
      <Component />
    </Layout>
  );
}
