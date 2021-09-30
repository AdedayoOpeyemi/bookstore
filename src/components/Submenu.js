import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Submenu = (prop) => {
  const dispatch = useDispatch();
  const { book } = prop;

  const removeBookFromStore = () => {
    // e.preventDefault();

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBook(book.id));
  };
  return (
    <div>
      <button type="button">Comment</button>
      <button type="button" onClick={removeBookFromStore}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

export default Submenu;
