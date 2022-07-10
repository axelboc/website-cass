import create from 'zustand';

export const useBookStore = create((set, get) => ({
  selectedBook: undefined,
  toggleBook: (book) =>
    set({ selectedBook: book === get().selectedBook ? undefined : book }),
}));
