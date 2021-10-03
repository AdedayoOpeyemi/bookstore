import React from 'react';
import Details from './Details';
import Progress from './Progress';
import Status from './Status';
import Submenu from './Submenu';
import '../assets/styles/bookitem.css';

const BookItem = (prop) => {
  const { book } = prop;

  return (
    <li id={book.item_id} className="book-container">
      <div className="bookDetails">
        <Details book={book} />
        <Submenu book={book} />
      </div>
      <Progress book={book} />
      <Status book={book} />
    </li>
  );
};

export default BookItem;
