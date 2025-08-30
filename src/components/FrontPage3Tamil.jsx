import React from 'react';
import './FrontPage3Tamil.css';

const FrontPage3Tamil = () => {
  return (
    <div className="front-page-3-tamil">
      {/* Background Images */}
      <img 
        className="background-image background-left" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/65f63d6661b8345c911cee67216e04b28408977e?width=818" 
        alt="" 
      />
      <img 
        className="background-image background-right" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/5fdd639f78df1408900b52b8a5cb2d6334b8fe9c?width=906" 
        alt="" 
      />
      <img 
        className="background-image background-center" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/d97619f35ab9723cd51301734332d5e3b552ef24?width=1038" 
        alt="" 
      />
      
      {/* Central Oval SVG */}
      <div className="central-oval-container">
        <svg className="central-oval" width="554" height="476" viewBox="0 0 554 476" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="277" cy="238" rx="277" ry="238" fill="url(#pattern0_39_225)"/>
          <defs>
            <pattern id="pattern0_39_225" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_39_225" transform="matrix(0.00444444 0 0 0.00517274 0 -0.0819328)"/>
            </pattern>
          </defs>
        </svg>
      </div>

      {/* Navbar */}
      <header className="navbar-container">
        <img 
          className="logo-image"
          src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615" 
          alt="Yatra's Cooking Cave Logo" 
        />
        <nav className="navbar">
          <div className="nav-item">HOME</div>
          <div className="nav-item">ABOUT US</div>
          <div className="nav-item">SERVICES</div>
          <div className="nav-item">ORDER NOW</div>
          <div className="nav-item">CONTACT US</div>
        </nav>
      </header>

      {/* Language Toggle */}
      <div className="language-toggle">
        <div className="language-option language-en">EN</div>
        <div className="language-option language-ta active">TA</div>
      </div>

      {/* Main Welcome Text */}
      <h1 className="main-welcome-text">
        வணக்கம் யாத்ராவின் சமையல் குகைக்கு வருக
      </h1>

      {/* Navigation Cards Grid */}
      <div className="navigation-cards-grid">
        <div className="navigation-card">
          <div className="card-background"></div>
          <div className="card-title">ABOUT US</div>
        </div>
        <div className="navigation-card">
          <div className="card-background"></div>
          <div className="card-title">SERVICES</div>
        </div>
        <div className="navigation-card">
          <div className="card-background"></div>
          <div className="card-title">ORDER NOW</div>
        </div>
        <div className="navigation-card">
          <div className="card-background"></div>
          <div className="card-title">CONTACT US</div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage3Tamil;
