import React from 'react';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="hero-card">
        <img 
          className="logo-hero-image"
          src="https://api.builder.io/api/v1/image/assets/TEMP/c3a5e75bd2165abc7f13331ca2daa8bc481ba119?width=1324" 
          alt="Yatra's Cooking Cave - The Home Chef" 
        />
      </div>
    </div>
  );
};

export default FrontPage;
