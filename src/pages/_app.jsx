import '../styles.css';
import '../utils.css';

import React from 'react';

import Layout from '../Layout';

export default function App(props) {
  const { Component } = props;

  return (
    <Layout>
      <Component />
    </Layout>
  );
}
