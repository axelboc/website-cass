import { TOGGLE_BOOK } from "./actions";

function selectedBookReducer(state = null, action) {
  if (action.type === TOGGLE_BOOK) {
    const book = action.payload;
    return book === state ? null : book;
  }

  return state;
}

export default {
  selectedBook: selectedBookReducer
};
