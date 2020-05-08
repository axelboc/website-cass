import PropTypes from 'prop-types';
import React from 'react';

import { useBookStore } from '../stores/book-store';
import styles from './Book.module.css';

function Book(props) {
  const { title, author, authorURL, coverSrc, spineColour, children } = props;

  const { selectedBook, toggleBook } = useBookStore();
  const isSelected = selectedBook === title;

  return (
    <div className={styles.root}>
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
          <p className={styles.author}>
            {authorURL ? (
              <a
                className={styles.authorLink}
                href={authorURL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={evt => {
                  evt.stopPropagation(); // don't open/close book
                }}
              >
                {author}
              </a>
            ) : (
              author
            )}
          </p>
          <div className={styles.review}>{children}</div>
        </div>
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorURL: PropTypes.string,
  url: PropTypes.string.isRequired,
  coverSrc: PropTypes.string.isRequired,
  spineColour: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Book;
