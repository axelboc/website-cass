import React, { PropTypes } from "react";
import renderHTML from "react-render-html";

import styles from "./index.css";

const Book = (props) => (
  <button 
    className={props.isSelected ? styles.selectedBook : styles.book}
    onClick={props.toggleBook}
    type="button"
  >
    <div className={styles.cover}>
      <div className={styles.spine} style={{ backgroundColor: props.spineColour }} />
      <div className={styles.coverImg}>
        <img className={styles.img} src={props.coverSrc} alt={`Check out ${props.title} on Goodreads`} />
      </div>
    </div>
    <div className={styles.content}>
      <h2 className={styles.heading}>{props.title}</h2>
      <p className={styles.author}>{renderAuthorLink(props.author, props.authorURL)}</p>
      {renderReview(props.review)}
    </div>
  </button>
);

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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorURL: PropTypes.string,
  review: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  coverSrc: PropTypes.string.isRequired,
  spineColour: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  toggleBook: PropTypes.func.isRequired
};

export default Book;
