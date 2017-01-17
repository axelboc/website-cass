import React, { PropTypes } from "react";

import books from "../../../collections/books.json";
import Book from "../../components/Book";
import styles from "./index.css";

const Nyctophilia = ({ children }) => (
  <div className={styles.nyctophilia}>
    <div className={styles.inner}>
      <div className={styles.intro}>
        <div className={styles.introInner}>
          {children}
        </div>
      </div>
      {books.map((book, i) => (
        <div className={styles.book} key={i}>
          <Book {...book}></Book>
        </div>
      ))}
      {books.length % 3 === 0 && <div className={styles.empty} />}
    </div>
  </div>
);

Nyctophilia.propTypes = {
  children: PropTypes.node
};

export default Nyctophilia;
