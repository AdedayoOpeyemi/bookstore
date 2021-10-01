import React from 'react';

const BookItem = (prop) => {
  const { book } = prop;

  return (
    <div>
      <span>{ book.category }</span>
      <h6>{ book.title }</h6>
    </div>
  );
};

export default BookItem;
