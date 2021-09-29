import React from 'react';
import BookItem from './BookItem';

const books = [
  {
    id: 1,
    title: 'Whenever you can',
    author: 'Michael Douglas',
    category: 'Hollywood movies',
  },
];

const BookList = () => (
  <ul>
    {books.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

export default BookList;
