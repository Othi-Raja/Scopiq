import React from 'react';
import './FrontPage4.css';

const FrontPage4 = () => {
  return (
    <div className="front-page-4">
      {/* Navbar */}
      <header className="navbar-header">
        <img 
          className="logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615" 
          alt="Yatra's Cooking Cave Logo" 
        />
        <nav className="main-navbar">
          <div className="nav-link">HOME</div>
          <div className="nav-link">ABOUT US</div>
          <div className="nav-link">SERVICES</div>
          <div className="nav-link">ORDER NOW</div>
          <div className="nav-link">CONTACT US</div>
        </nav>
      </header>

      {/* Central oval food image */}
      <div className="central-oval-container">
        <img 
          className="central-food-image"
          src="https://api.builder.io/api/v1/image/assets/TEMP/a0641f0048440a854b2e89d57fa0325cc876b9e5?width=1006" 
          alt="Featured food dish" 
        />
      </div>

      {/* Decorative food images */}
      <img 
        className="decorative-image left-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/78e13aef474a675c813806d6e91fc513450319ee?width=930" 
        alt="Decorative food background" 
      />
      <img 
        className="decorative-image right-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/5d569d32ca5e180603a5ad6bb8717532aa854143?width=888" 
        alt="Decorative food background" 
      />

      {/* Welcome title */}
      <h1 className="welcome-title">
        WELCOME TO 
        YATRA'S COOKING CAVE
      </h1>

      {/* Language selector */}
      <div className="language-selector">
        <div className="language-option active-lang">EN</div>
        <div className="language-option inactive-lang">TA</div>
      </div>

      {/* Navigation cards section */}
      <div className="navigation-cards">
        <div className="nav-card about-card">
          <div className="card-title">ABOUT US</div>
        </div>
        <div className="nav-card services-card">
          <div className="card-title">SERVICES</div>
        </div>
        <div className="nav-card order-card">
          <div className="card-title">ORDER NOW</div>
        </div>
        <div className="nav-card contact-card">
          <div className="card-title">CONTACT US</div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage4;
