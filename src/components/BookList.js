import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { loadBooksData } from '../redux/books/books';
import '../assets/styles/booklist.css';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooksData, dispatch);

  useEffect(() => {
    loadBooksAction();
    return null;
  }, []);

  return (
    <ul className="allBooks">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
