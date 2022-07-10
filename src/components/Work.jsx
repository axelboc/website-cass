import PropTypes from 'prop-types';

import styles from './Work.module.css';

function Work(props) {
  const { title, children } = props;

  return (
    <section className={styles.work}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Work;
