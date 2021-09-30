import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [t, setTitle] = useState('');
  const [c, setCategory] = useState('');
  const [a, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
    // make sure it's unique
      title: t,
      author: a,
      category: c,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <div className="add-book-container">
      <h4>ADD NEW BOOK</h4>
      <form>
        <input type="text" name="title" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="Book Author" onChange={(e) => setAuthor(e.target.value)} />
        <select name="category" id="category" defaultValue="Category" onChange={(e) => setCategory(e.target.value)}>
          <option disabled>Category</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
