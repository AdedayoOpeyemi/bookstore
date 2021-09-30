import React from 'react';

const BookItem = (prop) => {
  const { book } = prop;

  return (
    <div>
      <span>{ book.category }</span>
      <h6>{ book.title }</h6>
      <p>{ book.author }</p>
    </div>
  );
};

export default BookItem;
