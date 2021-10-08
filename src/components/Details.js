import React from 'react';

const BookItem = (prop) => {
  const { book } = prop;

  return (
    <div>
      <span className="category">{ book.category }</span>
      <br />
      <span className="title">{ book.title }</span>
      <br />
      <span className="author">Author name</span>
    </div>
  );
};

export default BookItem;
