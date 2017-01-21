import React, { PropTypes } from "react";
import { connect } from "react-redux";

import { toggleBook } from "../../state/actions";
import books from "../../../collections/books.json";
import Book from "../../components/Book";
import styles from "./index.css";

const Nyctophilia = ({ children, selectedBook, toggleBook }) => (
  <div className={styles.nyctophilia}>
    <div className={styles.inner}>
      <div className={styles.intro}>
        <div className={styles.introInner}>
          {children}
        </div>
      </div>
      {books.map((book, i) => (
        <div className={styles.book} key={i}>
          <Book
            {...book}
            isSelected={book === selectedBook}
            toggleBook={() => toggleBook(book)}
          />
        </div>
      ))}
      {books.length % 3 === 0 && <div className={styles.empty} />}
    </div>
  </div>
);

Nyctophilia.propTypes = {
  children: PropTypes.node,
  selectedBook: PropTypes.object,
  toggleBook: PropTypes.func.isRequired
};

const mapStateToProps = ({ selectedBook }) => ({ selectedBook });
const mapDispatchToProps = (dispatch) => ({
  toggleBook: (book) => {
    dispatch(toggleBook(book));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nyctophilia);
