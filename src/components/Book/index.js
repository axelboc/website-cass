import React, { PropTypes } from "react";
import renderHTML from "react-render-html";

import styles from "./index.css";

const Book = (props) => (
  <div className={styles.book}>
    <a className={styles.cover} href={props.url}>
      <img className={styles.img} src={props.coverSrc} alt={`Check out ${props.title} on Goodreads`} />
    </a>
    <div className={styles.content}>
      <h2 className={styles.heading}>{props.title}</h2>
      <p className={styles.author}>by {renderAuthorLink(props.author, props.authorURL)}</p>
      {renderReview(props.review)}
    </div>
  </div>
);

function renderAuthorLink(author, authorURL) {
  return authorURL 
    ? <a href={authorURL}>{author}</a>
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
  coverSrc: PropTypes.string.isRequired
};

export default Book;
