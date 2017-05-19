import React, { Component } from "react";
import PropTypes from "prop-types";
import { BodyContainer } from "phenomic";
import { connect } from "react-redux";

import Page from "../Page";
import Book from "../../components/Book";

import { toggleBook, resetSelectedBook } from "../../state/actions";
import books from "../../../collections/books.json";
import styles from "./index.css";

class Nyctophilia extends Component {

  componentWillUnmount() {
    // Reset state when leaving page
    this.props.resetSelectedBook();
  }

  render() {
    const { body, selectedBook, toggleBook } = this.props;

    return (
      <Page {...this.props}>
        <div className={styles.nyctophilia}>
          <div className={styles.inner}>
            <div className={styles.intro}>
              <div className={styles.introInner}>
                {body && <BodyContainer>{body}</BodyContainer>}
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
      </Page>
    );
  }

}

Nyctophilia.propTypes = {
  body: PropTypes.string,
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
