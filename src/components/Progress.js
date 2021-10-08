import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/styles/progress.css';

const Progress = () => {
  const percentage = 75;

  return (
    <div className="progressCircleContainer">
      <div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: 'linear-gradient(to right, #307bbe, #379cf6);',
          })}
        />
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
