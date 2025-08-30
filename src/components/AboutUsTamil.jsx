import React from 'react';
import './AboutUsTamil.css';

const AboutUsTamil = () => {
  return (
    <div className="about-page-tamil">
      {/* Background Pattern Images */}
      <img 
        className="pattern-image pattern-left-tamil" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/3afd6eee383fcdb16f22f1f511af1bdbe1d29a6a?width=2416" 
        alt="" 
      />
      <img 
        className="pattern-image pattern-right-tamil" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/b7b3bb841d48e985cba7e29f19f5fd7faa01dcc5?width=2416" 
        alt="" 
      />

      {/* Navbar */}
      <header className="navbar-container-tamil">
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
        <div className="language-option-tamil">EN</div>
        <div className="language-option-tamil active-tamil">TA</div>
      </div>

      {/* Main Welcome Section */}
      <h1 className="main-title-tamil">
        வணக்கம் 
        யாத்ராவின் சமையல் குகைக்கு வருக
      </h1>

      {/* Our Journey Section */}
      <h2 className="section-title-tamil">எங்கள் பயணம்</h2>
      
      <div className="journey-content-tamil">
        <p className="journey-description-tamil">
          ஆசையும் சுவையும் நிறைந்த பயணம், வீட்டில் சமைத்த உணவை உங்கள் வீட்டிற்கு கொண்டு வரும் முயற்சி. ஒவ்வொரு வீட்���ிலும் கிடைக்கும் அனைவருக்கும் ஆரோக்கியமான, சுவையான மற்றும் திருப்திகரமான வீட்டில் சமைத்த உணவை வழங்குவதே எங்கள் ஒரே நோக்கம்.
        </p>
        
        <img 
          className="food-image-tamil food-image-1-tamil"
          src="https://api.builder.io/api/v1/image/assets/TEMP/1a55cb662a7e0d4979bf72b27282dea0346f56b8?width=1004" 
          alt="Traditional food preparation" 
        />
      </div>

      {/* Story Section */}
      <div className="story-section-tamil">
        <img 
          className="food-image-tamil food-image-2-tamil"
          src="https://api.builder.io/api/v1/image/assets/TEMP/5271400a4f335a9e37d194314eaefefc30c5d7a5?width=1034" 
          alt="Home cooking scene" 
        />
        
        <img 
          className="food-image-tamil food-image-3-tamil"
          src="https://api.builder.io/api/v1/image/assets/TEMP/93c8dd780c9fbeaec3dfa00f609af20c3f2260bd?width=1050" 
          alt="Kitchen preparation" 
        />
        
        <p className="founder-story-tamil">
          2009 ஆம் ஆண்டு 
          காயத்ரி பிரியா துரை,
           தி ஹோம் செஃப் என்பவரால் நிறுவப்பட்டது. 

          சென்னையில் ஒரு சிறிய உணவகத்திலிருந்து ஆர்வமும் சுவையும் நிறைந்த வளர்ந்து வரும் வீட்டு சமையலறை வரை - இது எங்கள் கதை, உண்மையான வீட்டில் தயாரிக்கப்பட்ட உணவின் மீதான ஆர்வத்தால் இயக்கப்படும் ஒரு பயணம்.
        </p>
        
        <div className="final-image-container-tamil">
          <svg className="final-image-tamil" width="525" height="365" viewBox="0 0 525 365" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="filter0_d_55_189" x="0" y="0" width="561" height="401" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="32" dy="32"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_189"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_189" result="shape"/>
              </filter>
              <pattern id="pattern0_55_189" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_55_189" transform="matrix(0.00153814 0 0 0.00221239 -0.0214286 0)"/>
              </pattern>
            </defs>
            <g filter="url(#filter0_d_55_189)">
              <path d="M0 80C0 35.8172 35.8172 0 80 0H445C489.183 0 525 35.8172 525 80V285C525 329.183 489.183 365 445 365H80C35.8172 365 0 329.183 0 285V80Z" fill="url(#pattern0_55_189)" shapeRendering="crispEdges"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTamil;
