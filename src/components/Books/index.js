import React, { PropTypes } from "react";
import renderHTML from "react-render-html";
import styles from "./index.css";

const Books = ({ children }, { metadata: { books } }) => (
  <div className={styles.books}>
    <div className={styles.intro}>
      {children}
    </div>
    {books.map((book, i) => (
      <div className={styles.book} key={i}>
        <a className={styles.cover} href={book.url}>
          <img className={styles.img} src={book.coverSrc} alt={`Check out ${book.title} on Goodreads`} />
        </a>
        <div className={styles.content}>
          <h2 className={styles.heading}>{book.title}</h2>
          <p className={styles.author}>by {renderAuthorLink(book.author, book.authorURL)}</p>
          {renderReview(book.review)}
        </div>
      </div>
    ))}
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

Books.propTypes = {
  children: PropTypes.node,
};

Books.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Books;
