export const TOGGLE_BOOK = 'TOGGLE_BOOK';
export const RESET_SELECTED_BOOK = 'RESET_SELECTED_BOOK';

export function toggleBook(book) {
  return {
    type: TOGGLE_BOOK,
    payload: book
  };
}

export function resetSelectedBook() {
  return { type: RESET_SELECTED_BOOK };
}
