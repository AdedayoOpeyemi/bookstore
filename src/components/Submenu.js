import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { deleteBooksData } from '../redux/books/books';

const Submenu = (prop) => {
  const dispatch = useDispatch();
  const { book } = prop;

  const removeBooksAction = bindActionCreators(deleteBooksData, dispatch);

  const removeBookFromStore = () => {
    // dispatch an action and pass it the newBook object (your action's payload)
    removeBooksAction(book.item_id);
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
