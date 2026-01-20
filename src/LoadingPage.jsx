import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const letters = ['F', 'E', 'A', 'R'];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Animate letters
    const letterInterval = setInterval(() => {
      setCurrentLetter(prev => {
        if (prev >= letters.length - 1) {
          clearInterval(letterInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(letterInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-container ${isComplete ? 'fade-out' : ''}`}>
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern background */}
      <div className="grid-pattern"></div>

      {/* Main loading content */}
      <div className="loading-content">
        {/* FEAR Logo Animation */}
        <div className="fear-logo">
          {letters.map((letter, index) => (
            <span
              key={letter}
              className={`fear-letter ${index <= currentLetter ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <div className="tagline">
          <span className="tagline-text">Face Everything And Rise</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">{progress}%</div>
        </div>

        {/* Loading dots */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Geometric shapes for visual appeal */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  );
};

export default LoadingPage;