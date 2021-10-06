import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

const reducer = (state = initialState, action) => {
  let newBook;

  switch (action.type) {
    case (ADD):
      newBook = {
        ...action.book,
        id: uuidv4(),
        progress: 0,
        chapter: 1,
      };
      return (
        [
          ...state,
          newBook,
        ]
      );
    case (REMOVE):
      return state.filter((book) => book.id !== action.bookId);
    default: return state;
  }
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE,
  bookId,
});

export default reducer;
