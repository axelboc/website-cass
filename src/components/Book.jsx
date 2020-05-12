import PropTypes from 'prop-types';
import React from 'react';

import { useBookStore } from '../stores/book-store';
import styles from './Book.module.css';

function Book(props) {
  const { title, author, coverSrc, spineColour, children } = props;

  const { selectedBook, toggleBook } = useBookStore();
  const isSelected = selectedBook === title;

  return (
    <button
      className={styles.book}
      type="button"
      data-selected={isSelected || undefined}
      onClick={() => {
        toggleBook(title);
      }}
    >
      <div className={styles.cover}>
        <div
          className={styles.spine}
          style={{ backgroundColor: spineColour }}
        />
        <div className={styles.coverImg}>
          <img className={styles.img} src={coverSrc} />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <div className={styles.review}>{children}</div>
      </div>
    </button>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  coverSrc: PropTypes.string.isRequired,
  spineColour: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Book;
