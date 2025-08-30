import React from 'react';
import './FrontPage2.css';
import Marquee from "react-fast-marquee";
const FrontPage2 = () => {
  return (
    <div className="front-page-2 bg-[#9a0002]">
     <Marquee> 
       {/* Background decorative images */}
      <img
        className="decorative-image left-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/22d7a51f0bdb3a6b3279a7a81079b4d8f6fbac47?width=872"
        alt="Decorative food background"
      />
      <img
        className="decorative-image right-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/80d0a39af64b4cefaf18ec5d6c99f77f77a777ad?width=944"
        alt="Decorative food background"
      />
      {/* Central oval image */}
      <img
        className="central-food-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/f10243c41293842ebff5ee5d38980b6d5958726f?width=910"
        alt="Featured food dish"
      />
     </Marquee>
      {/* Welcome title */}
      <h1 className="welcome-title">
        WELCOME TO
        YATRA'S COOKING CAVE
      </h1>
      {/* Navigation cards section */}
      {/* <div className="navigation-cards">
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
      </div> */}
    </div>
  );
};
export default FrontPage2;
