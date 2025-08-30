import React from 'react';
import './History.css';

const History = () => {
  return (
    <div className="history">
      {/* Background decorative images */}
      <img 
        className="history-pattern-left"
        src="https://api.builder.io/api/v1/image/assets/TEMP/c3c8915113f72e37bff05827310271db2526811d?width=2416" 
        alt="" 
      />
      <img 
        className="history-pattern-right"
        src="https://api.builder.io/api/v1/image/assets/TEMP/e473d671f3512a2f2df68026ce513fe6a74cb03e?width=2416" 
        alt="" 
      />

      {/* Curved timeline line */}
      <svg className="timeline-curve" width="140" height="218" viewBox="0 0 140 218" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M123.221 206.245C44.267 185.241 10.1428 135.351 6.35742 90.5703C2.56982 45.7627 29.2182 6.00017 71.6875 6V7C30.0021 7.00017 3.59776 46.0441 7.35449 90.4863C11.0987 134.778 44.8613 184.361 123.468 205.276L124.055 202.969L128.188 207L122.63 208.563L123.221 206.245Z" 
              fill="#D9D9D9" 
              stroke="#9A0002" 
              strokeWidth="6"/>
      </svg>

      {/* Main title */}
      <h1 className="history-main-title">A BRIEF HISTORY</h1>

      {/* Timeline separator line */}
      <div className="timeline-separator"></div>

      {/* Timeline items */}
      <div className="timeline-container">
        
        {/* 2009 - The Beginning */}
        <div className="timeline-item timeline-item-1">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2 className="timeline-year">2009 - The Beginning</h2>
            <p className="timeline-description">
              Gayathripriya Durai started a small restaurant in Chennai, serving traditional recipes passed down from previous generations to customers with care
            </p>
          </div>
        </div>

        {/* 2013 - A Pause */}
        <div className="timeline-item timeline-item-2">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2 className="timeline-year">2013 - A Pause</h2>
            <p className="timeline-description">
              She took a short break, but her passion for cooking remained strong and unwavering
            </p>
          </div>
        </div>

        {/* 2021 - A New Beginning */}
        <div className="timeline-item timeline-item-3">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2 className="timeline-year">2021 – A New Beginning</h2>
            <p className="timeline-description">
              Restarting from home, Yathraa's Cooking Cave began once again, accepting orders through Instagram and private platforms.
            </p>
          </div>
        </div>

        {/* 2023 - Expanding Our Service */}
        <div className="timeline-item timeline-item-4">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2 className="timeline-year">2023 – Expanding Our Service</h2>
            <p className="timeline-description">
              Started offering food services in the Anna Nagar area, bringing delicious homemade meals to more people
            </p>
          </div>
        </div>

        {/* 2025 - A Journey of Fulfilling Dreams */}
        <div className="timeline-item timeline-item-5">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2 className="timeline-year">2025– A Journey of Fulfilling Dreams</h2>
            <p className="timeline-description">
              Introducing Yatra's Cooking Cave | The Home Chef, with the vision of bringing traditional, ancestral recipes into every home through this heartfelt culinary journey
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default History;
