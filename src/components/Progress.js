import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/styles/progress.css';

const Progress = () => {
  // const { book } = prop;
  const percentage = 75;

  return (
    <div className="progressCircleContainer">
      <div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div className="progress-report-text">
        <span>{`${percentage}%`}</span>
        <br />
        <span className="completed">Completed</span>
      </div>
    </div>
  );
};

export default Progress;
