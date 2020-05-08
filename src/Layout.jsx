import PropTypes from 'prop-types';
import React from 'react';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import styles from './Layout.module.css';
import { useRouterState } from './utils';

function Layout(props) {
  const { children } = props;

  const { isLoading, showHomeLayout } = useRouterState();

  return (
    <div className={styles.root}>
      {showHomeLayout ? <Banner /> : <NavBar />}
      <main className={styles.main}>{isLoading ? <Loading /> : children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
