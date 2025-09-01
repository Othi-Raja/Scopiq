import React, { useState, useEffect } from 'react';
import './GlobalLoader.css';

const GlobalLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const handleLoaded = () => setIsContentLoaded(true);

    if (document.readyState === 'complete') {
      setIsContentLoaded(true);
    } else {
      window.addEventListener('load', handleLoaded);
    }

    // Fallback: hide after 5s in case 'load' is blocked
    const timeoutId = setTimeout(() => setIsContentLoaded(true), 5000);

    return () => {
      window.removeEventListener('load', handleLoaded);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    // Minimum loading time of 2 seconds
    if (isContentLoaded) {
      const minLoadTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(minLoadTimer);
    }
  }, [isContentLoaded]);

  return (
    <>
      {isLoading && (
        <div className="global-loader">
          <div className="loader">
            <div className="loader-spinner" />
            <div className="loader-text">Loading...</div>
            <div className="loader-subtitle">Yatra's Cooking Cave</div>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default GlobalLoader;