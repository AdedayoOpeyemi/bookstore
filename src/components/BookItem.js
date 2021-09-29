import React from 'react';

const BookItem = (prop) => {
  const { book } = prop;

  return (
    <li>
      <div>
        <span>{ book.genre }</span>
        <h6>{ book.name }</h6>
        <p>{ book.author }</p>
      </div>
    </li>
  );
};

export default BookItem;
