export const TOGGLE_BOOK = 'TOGGLE_BOOK';

export function toggleBook(book) {
  return {
    type: TOGGLE_BOOK,
    payload: book
  };
}
