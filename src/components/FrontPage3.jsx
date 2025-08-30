import React from 'react';
import './FrontPage3.css';

const FrontPage3 = () => {
  return (
    <div className="front-page-3">
      {/* Header Section */}
      <div className="header-section">
        <img 
          className="header-logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615" 
          alt="Yatra's Cooking Cave Logo" 
        />
        <div className="navbar">
          <div className="nav-item">HOME</div>
          <div className="nav-item">ABOUT US</div>
          <div className="nav-item">SERVICES</div>
          <div className="nav-item">ORDER NOW</div>
          <div className="nav-item">CONTACT US</div>
        </div>
      </div>

      {/* Background Images */}
      <img 
        className="background-image-left"
        src="https://api.builder.io/api/v1/image/assets/TEMP/65f63d6661b8345c911cee67216e04b28408977e?width=818" 
        alt="" 
      />
      <img 
        className="background-image-right"
        src="https://api.builder.io/api/v1/image/assets/TEMP/5fdd639f78df1408900b52b8a5cb2d6334b8fe9c?width=906" 
        alt="" 
      />

      {/* Central Image */}
      <div className="central-image-container">
        <img 
          className="central-image"
          src="https://api.builder.io/api/v1/image/assets/TEMP/d97619f35ab9723cd51301734332d5e3b552ef24?width=1038" 
          alt="Main dish" 
        />
      </div>

      {/* Welcome Text */}
      <div className="welcome-text">
        WELCOME TO 
        YATRA'S COOKING CAVE 
      </div>

      {/* Language Toggle */}
      <div className="language-toggle">
        <div className="language-option active">EN</div>
        <div className="language-option">TA</div>
      </div>

      {/* Service Cards Grid */}
      <div className="service-cards-grid">
        <div className="service-card">
          <div className="service-card-content">ABOUT US</div>
        </div>
        <div className="service-card">
          <div className="service-card-content">SERVICES</div>
        </div>
        <div className="service-card">
          <div className="service-card-content">ORDER NOW</div>
        </div>
        <div className="service-card">
          <div className="service-card-content">CONTACT US</div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage3;
