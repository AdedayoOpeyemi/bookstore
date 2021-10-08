/* eslint-disable max-len */
import { React, useState } from 'react';
// import thunk from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooksData } from '../redux/books/books';
import '../assets/styles/addNewBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [t, setTitle] = useState('');
  const [c, setCategory] = useState('Category');
  const addBooksAction = bindActionCreators(addBooksData, dispatch);

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (t !== '' && c !== 'Category') {
      const newBook = {
        item_id: uuidv4(),
        title: t,
        category: c,
      };

      // dispatch an action and pass it the newBook object (your action's payload)
      addBooksAction(newBook);
      setTitle('');
      setCategory('Category');
    }
  };

  return (
    <div className="add-book-container">
      <h4>ADD NEW BOOK</h4>
      <form onSubmit={submitBookToStore}>
        <input type="text" name="title" placeholder="Book Title" value={t} onChange={(e) => setTitle(e.target.value)} required />
        <select name="category" id="category" value={c} onChange={(e) => setCategory(e.target.value)} required>
          <option value="Category" disabled>Category</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
