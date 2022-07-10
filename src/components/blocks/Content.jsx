import PropTypes from 'prop-types';

import site from '../../site.json';
import styles from './Content.module.css';

const { imgUrl } = site;

/**
 * Building block used to render the body of a Work entry along with an optional image.
 * By default, the image appears to the left of the body and the body takes up
 * 61.5% of the available width on desktop (golden ratio).
 */
function Content(props) {
  const { image, isImageRight, isHalfHalf, children } = props;

  const rootClassName = isHalfHalf ? styles.rootHalfHalf : styles.root;
  const imgClassName = isImageRight ? styles.imageRight : styles.image;

  return (
    <div className={rootClassName}>
      {image && (
        <div className={imgClassName}>
          <img src={`${imgUrl}/w_605,q_90/${image}`} width="605" />
        </div>
      )}
      <div className={styles.body}>
        <div>{children}</div>
      </div>
    </div>
  );
}

Content.propTypes = {
  image: PropTypes.string,
  isImageRight: PropTypes.bool,
  isHalfHalf: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Content.defaultProps = {
  isImageRight: false,
  isHalfHalf: false,
};

export default Content;
