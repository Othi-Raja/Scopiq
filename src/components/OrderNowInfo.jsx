import React from 'react';
import './OrderNowInfo.css';

const OrderNowInfo = () => {
  return (
    <div className="order-now-info">
      {/* Background pattern images */}
      <img 
        className="pattern-image pattern-image-1"
        src="https://api.builder.io/api/v1/image/assets/TEMP/d1fc6187661d23b1b4fcdbd6baeab790928cbed1?width=2726" 
        alt="" 
      />
      <img 
        className="pattern-image pattern-image-2"
        src="https://api.builder.io/api/v1/image/assets/TEMP/dc367b3a0d88430c2960815514b8235630281765?width=2512" 
        alt="" 
      />
      <img 
        className="pattern-image pattern-image-3"
        src="https://api.builder.io/api/v1/image/assets/TEMP/4b25ca2df63db8afccb80e6f1588b366f6a4be20?width=2712" 
        alt="" 
      />

      {/* Header section */}
      <div className="header-section">
        <div className="navbar-container">
          <img 
            className="logo-image"
            src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615" 
            alt="" 
          />
          <div className="navbar">
            <div className="nav-item">HOME</div>
            <div className="nav-item">ABOUT US</div>
            <div className="nav-item">SERVICES</div>
            <div className="nav-item">ORDER NOW</div>
            <div className="nav-item">CONTACT US</div>
          </div>
        </div>
        
        <div className="language-switcher">
          <div className="language-option active">EN</div>
          <div className="language-option">TA</div>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1 className="main-title">YATRA's Traditional Homemade Foods</h1>
        <p className="subtitle">
          Easily pre-order authentic Traditional cuisine, crafted with organic ingredients for your daily tiffins or special events.
        </p>
        
        <h2 className="section-title">How Pre-Ordering Works</h2>
        <p className="section-description">
          Order fresh Traditional meals like Thatta Payiru Biriyani or Ragi Kalli with our simple pre-order process.
        </p>
      </div>

      {/* Timeline title */}
      <div className="timeline-title">DELIVERY TIMELINE</div>

      {/* Steps */}
      <div className="steps-container">
        <div className="step-card step-1">
          <div className="step-content">
            <h3 className="step-title">1. Select Date & Event</h3>
            <p className="step-description">
              Choose your delivery date for Pre Order Foods. Book 3 days in advance for Food Order, 7 days for events.
            </p>
          </div>
        </div>

        <div className="step-card step-2">
          <div className="step-content">
            <h3 className="step-title">2. Choose Your Menu</h3>
            <p className="step-description">
              Select dishes like Channa Pullav or Suttu Kozhupu Varuval, or customize your menu for events.
            </p>
          </div>
        </div>

        <div className="step-card step-3">
          <div className="step-content">
            <h3 className="step-title">3. Confirm & Pay</h3>
            <p className="step-description">
              Review your order, confirm delivery details, and pay securely and No cash on delivery option available.
            </p>
          </div>
        </div>

        <div className="step-card step-4">
          <div className="step-content">
            <h3 className="step-title">4. Food Preparation</h3>
            <p className="step-description">
              Gayathri Priya prepares your meal with organic ingredients from her kitchen garden on delivery day.
            </p>
          </div>
        </div>

        <div className="step-card step-5">
          <div className="step-content">
            <h3 className="step-title">5. Delivery</h3>
            <p className="step-description">
              Your meal is delivered hot and fresh and 60 minutes before from booking time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNowInfo;
