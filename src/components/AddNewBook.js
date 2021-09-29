import React from 'react';

const AddBook = () => (
  <>
    <div className="add-book-container">
      <h4>ADD NEW BOOK</h4>
      <form>
        <input type="text" placeholder="Title" />
        <select name="categories" id="categories"/>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </>
);

export default AddBook;