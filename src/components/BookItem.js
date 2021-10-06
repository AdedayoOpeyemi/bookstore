import React from 'react';
import Details from './Details';
import Progress from './Progress';
import Status from './Status';
import Submenu from './Submenu';

const BookItem = (prop) => {
  const { book } = prop;

  return (
    <li id={book.id}>
      <div>
        <Details book={book} />
        <Submenu book={book} />
        <Progress book={book} />
        <Status book={book} />
      </div>
    </li>
  );
};

export default BookItem;
