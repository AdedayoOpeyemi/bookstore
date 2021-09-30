import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

// const books = [
//   {
//     id: 1,
//     title: 'Whenever you can',
//     author: 'Michael Douglas',
//     category: 'Hollywood movies',
//   },
// ];

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
