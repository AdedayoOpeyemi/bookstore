import React from 'react';

const Progress = (prop) => {
  const { book } = prop;

  return (
    <div>
      <p>{ book.progress }</p>
      <p>Completed</p>
    </div>
  );
};

export default Progress;
