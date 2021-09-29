import React from 'react';

const options = [
  {
    key: 'apple',
    label: 'Apple',
    value: 'apple',
  },
  {
    key: 'mango',
    label: 'Mango',
    value: 'mango',
  },
  {
    key: 'banana',
    label: 'Banana',
    value: 'banana',
  },
  {
    key: 'pineapple',
    label: 'Pineapple',
    value: 'pineapple',
  },
];

const AddBook = () => (
  <>
    <div className="add-book-container">
      <h4>ADD NEW BOOK</h4>
      <form>
        <input type="text" placeholder="Book Title" />
        <select>
          {options.map((option) => (
            <option key={option.key} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </>
);

export default AddBook;
