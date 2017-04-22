export const TOGGLE_BOOK = 'TOGGLE_BOOK';
export const RESET_SELECTED_BOOK = 'RESET_SELECTED_BOOK';

export const SET_BANNER_ANIMATED = 'SET_BANNER_ANIMATED';

export function toggleBook(book) {
  return {
    type: TOGGLE_BOOK,
    payload: book
  };
}

export function resetSelectedBook() {
  return { type: RESET_SELECTED_BOOK };
}

export function setBannerAnimated() {
  return { type: SET_BANNER_ANIMATED };
}
