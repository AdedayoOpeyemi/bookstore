import React from 'react';
import '../assets/styles/status.css';

const Status = () => {
  const chapter = 7;

  return (
    <div className="statusDetails">
      <span className="chapter-head">CURRENT CHAPTER</span>
      <p>
        {`Chapter ${chapter}`}
      </p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  );
};

export default Status;
