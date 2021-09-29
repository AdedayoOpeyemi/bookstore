import React from 'react';

const Status = (prop) => {
  const { book } = prop;

  return (
    <div>
      <p>CURRENT CHAPTER</p>
      <p>
        Chapter
        { book.currentChapter }
      </p>
      <button type="button">Update Progress</button>
    </div>
  );
};

export default Status;
