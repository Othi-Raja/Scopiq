import React from 'react';
import './FrontPageTamil.css';

const FrontPageTamil = () => {
  return (
    <div className="front-page-tamil">
      {/* Header with Navbar */}
      <header className="header-container-tamil">
        <img 
          className="logo-image-tamil"
          src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615" 
          alt="Yatra's Cooking Cave Logo" 
        />
        <nav className="navbar-tamil">
          <div className="nav-item-tamil">HOME</div>
          <div className="nav-item-tamil">ABOUT US</div>
          <div className="nav-item-tamil">SERVICES</div>
          <div className="nav-item-tamil">ORDER NOW</div>
          <div className="nav-item-tamil">CONTACT US</div>
        </nav>
      </header>

      {/* Language Toggle */}
      <div className="language-toggle-tamil">
        <div className="language-option-tamil active-en">EN</div>
        <div className="language-option-tamil active-ta">TA</div>
      </div>

      {/* Side Food Images */}
      <img 
        className="side-food-image left-food-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/22d7a51f0bdb3a6b3279a7a81079b4d8f6fbac47?width=872" 
        alt="Traditional food" 
      />
      <img 
        className="side-food-image right-food-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/80d0a39af64b4cefaf18ec5d6c99f77f77a777ad?width=944" 
        alt="Traditional food" 
      />

      {/* Center Circular Image */}
      <div className="center-image-container">
        <img 
          className="center-food-image"
          src="https://api.builder.io/api/v1/image/assets/TEMP/f10243c41293842ebff5ee5d38980b6d5958726f?width=910" 
          alt="Featured dish" 
        />
      </div>

      {/* Main Welcome Title */}
      <h1 className="welcome-title-tamil">
        வணக்கம் யாத்ராவின் சமையல் குகைக்கு வருக
      </h1>

      {/* Service Grid */}
      <div className="service-grid-tamil">
        <div className="service-card-tamil">
          <div className="service-background-tamil"></div>
          <div className="service-title-tamil">ABOUT US</div>
        </div>
        <div className="service-card-tamil">
          <div className="service-background-tamil"></div>
          <div className="service-title-tamil">SERVICES</div>
        </div>
        <div className="service-card-tamil">
          <div className="service-background-tamil"></div>
          <div className="service-title-tamil">ORDER NOW</div>
        </div>
        <div className="service-card-tamil">
          <div className="service-background-tamil"></div>
          <div className="service-title-tamil">CONTACT US</div>
        </div>
      </div>
    </div>
  );
};

export default FrontPageTamil;
