import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Import CSS file for styling

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="progress-bar">
      {isLoading ? (
        <div className="loading-text">ProgressBar...</div>
      ) : (
        <div className="complete-text">Progressed</div>
      )}
      <div className="progress-bar-container">
        <div
          className="progress-bar-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-text">{progress}% Complete!</div>
    </div>
  );
};

export default ProgressBar;
