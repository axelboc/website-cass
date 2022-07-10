import PropTypes from 'prop-types';

import Footer from './Footer';
import styles from './Read.module.css';

function Read(props) {
  const { title, byline, isLoading, children } = props;

  return (
    !isLoading && (
      <div>
        <main>
          <div className={styles.read}>
            <header className={styles.header}>
              <h1 className={styles.heading}>{title}</h1>
              <p className={styles.byline}>{byline}</p>
            </header>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    )
  );
}

Read.propTypes = {
  title: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Read;
