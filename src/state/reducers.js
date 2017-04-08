import { TOGGLE_BOOK, RESET_SELECTED_BOOK } from "./actions";

function selectedBookReducer(state = null, action) {
  const { type, payload: index } = action;

  switch (type) {
    case TOGGLE_BOOK:
      return index === state ? null : index;
    case RESET_SELECTED_BOOK:
      return null;
  }

  return state;
}

export default {
  selectedBook: selectedBookReducer
};
