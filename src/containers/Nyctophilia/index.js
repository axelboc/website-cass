import React, { PropTypes } from "react";

import books from "../../../collections/books.json";
import Book from "../../components/Book";
import styles from "./index.css";

const Nyctophilia = ({ children }) => (
  <div className={styles.nyctophilia}>
    <div className={styles.intro}>
      {children}
    </div>
    {books.map((book, i) => (
      <div className={styles.book} key={i}>
        <Book {...book}></Book>
      </div>
    ))}
  </div>
);

Nyctophilia.propTypes = {
  children: PropTypes.node
};

export default Nyctophilia;
