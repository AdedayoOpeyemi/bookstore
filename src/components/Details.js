import React from 'react';

const BookItem = (prop) => {
  const { book } = prop;

  return (
    <div>
      <span>{ book.genre }</span>
      <h6>{ book.name }</h6>
      <p>{ book.author }</p>
    </div>
  );
};

export default BookItem;
