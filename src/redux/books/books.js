/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// import { v4 as uuidv4 } from 'uuid';

// action constants
const LOAD = 'bookstore/books/LOAD';
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  let newBook;

  switch (action.type) {
    case (ADD):
      newBook = {
        ...action.book,
      };
      return (
        [
          ...state,
          newBook,
        ]
      );
    case (REMOVE):
      return state.filter((book) => book.id !== action.bookId);
    case (LOAD):
      console.log(action.state);
      return action.state;
    default: return state;
  }
};

// actions
export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE,
  bookId,
});

export const loadBooks = () => ({
  type: LOAD,
});

// ACtion creators
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gFAolRGHlyMk03UM8lzM/books/';

export const loadBooksData = () => async (dispatch) => {
  const res = await fetch(baseUrl);
  const data = await res.json();
  const keys = Object.keys(data);
  const state = [];
  keys.forEach((key) => { state.push({ ...data[key][0], item_id: key }); });
  dispatch({ type: LOAD, state });
};

export const addBooksData = (book) => async (dispatch) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: new URLSearchParams(book),
  });
  dispatch({ type: ADD, book });
};

export default reducer;
