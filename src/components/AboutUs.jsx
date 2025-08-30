import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Background Pattern Images */}
      <img 
        className="pattern-image pattern-left" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/96b4e8651634aaeaef06967d8d41e48a509764d8?width=2416" 
        alt=""  
      />
      <img 
        className="pattern-image pattern-right" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/c62359dde5a888399f233629ae9ddedd27c1c20b?width=2416" 
        alt="" 
      />

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
        <div className="language-option active">EN</div>
        <div className="language-option">TA</div>
      </div>

      {/* Main Welcome Section */}
      <h1 className="main-title">
        HELLO 
        WELCOME TO 
        YATRA'S COOKING CAVE
      </h1>

      {/* Our Journey Section */}
      <h2 className="section-title">OUR JOURNEY</h2>
      
      <div className="journey-content">
        <p className="journey-description">
          A journey filled with desire and flavor, an attempt to bring home-cooked meals to your home. Our sole aim is to provide healthy, delicious, and satisfying home-cooked food to everyone available in every home.
        </p>
        
        <img 
          className="food-image food-image-1"
          src="https://api.builder.io/api/v1/image/assets/TEMP/1a55cb662a7e0d4979bf72b27282dea0346f56b8?width=1004" 
          alt="Traditional food preparation" 
        />
      </div>

      {/* Story Section */}
      <div className="story-section">
        <img 
          className="food-image food-image-2"
          src="https://api.builder.io/api/v1/image/assets/TEMP/5271400a4f335a9e37d194314eaefefc30c5d7a5?width=1034" 
          alt="Home cooking scene" 
        />
        
        <img 
          className="food-image food-image-3"
          src="https://api.builder.io/api/v1/image/assets/TEMP/93c8dd780c9fbeaec3dfa00f609af20c3f2260bd?width=1050" 
          alt="Kitchen preparation" 
        />
        
        <p className="founder-story">
          Founded in 2009 by Gayathri Priya Durai, THE HOME CHEF. 
          From a small restaurant in Chennai to a growing home kitchen filled with passion and flavor — this is our story, a journey driven by the love for authentic homemade food
        </p>
        
        <div className="final-image-container">
          <svg className="final-image" width="525" height="365" viewBox="0 0 525 365" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="filter0_d_1_98" x="0" y="0" width="561" height="401" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="32" dy="32"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_98"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_98" result="shape"/>
              </filter>
              <pattern id="pattern0_1_98" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_1_98" transform="matrix(0.00153814 0 0 0.00221239 -0.0214286 0)"/>
              </pattern>
            </defs>
            <g filter="url(#filter0_d_1_98)">
              <path d="M0 80C0 35.8172 35.8172 0 80 0H445C489.183 0 525 35.8172 525 80V285C525 329.183 489.183 365 445 365H80C35.8172 365 0 329.183 0 285V80Z" fill="url(#pattern0_1_98)" shapeRendering="crispEdges"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
