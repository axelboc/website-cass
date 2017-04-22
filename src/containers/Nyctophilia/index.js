import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { toggleBook, resetSelectedBook } from "../../state/actions";
import books from "../../../collections/books.json";
import Book from "../../components/Book";

import styles from "./index.css";

class Nyctophilia extends Component {

  componentWillUnmount() {
    // Reset state when leaving page
    this.props.resetSelectedBook();
  }

  render() {
    const { children, selectedBook, toggleBook } = this.props;

    return (
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
                isSelected={i === selectedBook}
                toggleBook={() => toggleBook(i)}
              />
            </div>
          ))}
          {books.length % 3 === 0 && <div className={styles.empty} />}
        </div>
      </div>
    );
  }

}

Nyctophilia.propTypes = {
  children: PropTypes.node,
  selectedBook: PropTypes.number,
  toggleBook: PropTypes.func.isRequired,
  resetSelectedBook: PropTypes.func.isRequired
};

const mapStateToProps = ({ selectedBook }) => ({ selectedBook });
const mapDispatchToProps = (dispatch) => ({
  toggleBook: (index) => dispatch(toggleBook(index)),
  resetSelectedBook: () => dispatch(resetSelectedBook())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nyctophilia);
