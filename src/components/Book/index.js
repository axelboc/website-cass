import React from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";

import styles from "./index.css";

function Book(props) {
  const { meta, html, isSelected, toggleBook } = props;
  const { title, author, authorURL, coverSrc, spineColour } = meta;

  return (
    <button 
      className={isSelected ? styles.selectedBook : styles.book}
      onClick={toggleBook}
      type="button"
    >
      <div className={styles.cover}>
        <div className={styles.spine} style={{ backgroundColor: spineColour }} />
        <div className={styles.coverImg}>
          <img className={styles.img} src={coverSrc} alt={`Check out ${title} on Goodreads`} />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.author}>{renderAuthorLink(author, authorURL)}</p>
        {renderReview(html)}
      </div>
    </button>
  );
}

function renderAuthorLink(author, authorURL) {
  return authorURL 
    ? <a className={styles.authorLink} href={authorURL}>{author}</a>
    : author;
}

function renderReview(review) {
  if (/^html:/.test(review)) {
    return (
      <div className={styles.review}>
        {renderHTML(review.split('html:')[1])}
      </div>
    );
  } else {
    return <p className={styles.review}>{review}</p>;
  }
}

Book.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorURL: PropTypes.string,
    url: PropTypes.string.isRequired,
    coverSrc: PropTypes.string.isRequired,
    spineColour: PropTypes.string.isRequired,
  }).isRequired,
  html: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  toggleBook: PropTypes.func.isRequired
};

export default Book;
