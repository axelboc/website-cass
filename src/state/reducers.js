import { TOGGLE_BOOK, RESET_SELECTED_BOOK } from "./actions";
import { SET_BANNER_ANIMATED } from "./actions";

export function selectedBook(state = null, action) {
  const { type, payload: index } = action;

  switch (type) {
    case TOGGLE_BOOK:
      return index === state ? null : index;
    case RESET_SELECTED_BOOK:
      return null;
  }

  return state;
}

export function bannerAnimated(state = false, action) {
  return action.type === SET_BANNER_ANIMATED ? true : state;
}
