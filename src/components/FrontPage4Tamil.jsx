import React from 'react';
import './FrontPage4Tamil.css';

const FrontPage4Tamil = () => {
  return (
    <div className="front-page-4-tamil">
      {/* Header with Navbar */}
      <header className="header-container-4-tamil">
        <img 
          className="logo-image-4-tamil"
          src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615" 
          alt="Yatra's Cooking Cave Logo" 
        />
        <nav className="navbar-4-tamil">
          <div className="nav-item-4-tamil">HOME</div>
          <div className="nav-item-4-tamil">ABOUT US</div>
          <div className="nav-item-4-tamil">SERVICES</div>
          <div className="nav-item-4-tamil">ORDER NOW</div>
          <div className="nav-item-4-tamil">CONTACT US</div>
        </nav>
      </header>

      {/* Language Toggle */}
      <div className="language-toggle-4-tamil">
        <div className="language-option-4-tamil en-option">EN</div>
        <div className="language-option-4-tamil ta-option">TA</div>
      </div>

      {/* Central Oval Food Image */}
      <div className="central-oval-container-4-tamil">
        <img 
          className="central-food-image-4-tamil"
          src="https://api.builder.io/api/v1/image/assets/TEMP/a0641f0048440a854b2e89d57fa0325cc876b9e5?width=1006" 
          alt="Featured dish" 
        />
      </div>

      {/* Decorative Food Images */}
      <img 
        className="decorative-image-4-tamil left-food-image-4-tamil"
        src="https://api.builder.io/api/v1/image/assets/TEMP/78e13aef474a675c813806d6e91fc513450319ee?width=930" 
        alt="Traditional food" 
      />
      <img 
        className="decorative-image-4-tamil right-food-image-4-tamil"
        src="https://api.builder.io/api/v1/image/assets/TEMP/5d569d32ca5e180603a5ad6bb8717532aa854143?width=888" 
        alt="Traditional food" 
      />

      {/* Main Welcome Title in Tamil */}
      <h1 className="welcome-title-4-tamil">
        வணக்கம் யாத்ராவின் சமை��ல் குகைக்கு வருக
      </h1>

      {/* Service Grid */}
      <div className="service-grid-4-tamil">
        <div className="service-card-4-tamil">
          <div className="service-background-4-tamil"></div>
          <div className="service-title-4-tamil">ABOUT US</div>
        </div>
        <div className="service-card-4-tamil">
          <div className="service-background-4-tamil"></div>
          <div className="service-title-4-tamil">SERVICES</div>
        </div>
        <div className="service-card-4-tamil">
          <div className="service-background-4-tamil"></div>
          <div className="service-title-4-tamil">ORDER NOW</div>
        </div>
        <div className="service-card-4-tamil">
          <div className="service-background-4-tamil"></div>
          <div className="service-title-4-tamil">CONTACT US</div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage4Tamil;
