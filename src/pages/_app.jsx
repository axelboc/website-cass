import '../styles.css';
import '../utils.css';

import Head from 'next/head';

import Layout from '../Layout';

export default function App(props) {
  const { Component } = props; // eslint-disable-line react/prop-types

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component />
    </Layout>
  );
}
