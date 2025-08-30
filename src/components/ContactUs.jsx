import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
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

      {/* Main Content Container */}
      <div className="contact-content">
        <div className="contact-card">
          {/* Left Side - Find Us Section */}
          <div className="find-us-section">
            <div className="find-us-header">
              <h1 className="find-us-title">Find us</h1>
              <svg className="location-icon" width="44" height="57" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.5848 56.1928C13.3275 47.1218 -0.716971 34.245 0.0285209 20.238C1.24818 8.85045 10.434 0 21.5848 0C32.7356 0 41.9215 8.85045 43.1412 20.238C43.6553 35.5322 30.9666 46.1149 21.5848 56.1928Z" fill="#040404"/>
                <path d="M30.1805 21.3145C30.1805 26.4274 26.2404 30.5723 21.3802 30.5723C16.5199 30.5723 12.5798 26.4274 12.5798 21.3145C12.5798 16.2015 16.5199 12.0566 21.3802 12.0566C26.2404 12.0566 30.1805 16.2015 30.1805 21.3145Z" fill="#E5E5E5"/>
              </svg>
            </div>

            <div className="divider-line"></div>

            <div className="business-hours-section">
              <h2 className="business-hours-title">Business Hours :</h2>
              <div className="hours-schedule">
                <div className="schedule-item">
                  <span className="day">Monday - Saturday</span>
                  <span className="time">8:00AM - 8:00PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Sunday</span>
                  <span className="time">10:00AM - 2:00PM</span>
                </div>
              </div>
            </div>

            <div className="social-icons">
              <svg className="social-icon" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_282)">
                  <rect y="0.140137" width="28" height="28" rx="10" fill="black"/>
                  <path d="M14 2.66123C17.7406 2.66123 18.1836 2.67764 19.6547 2.74326C21.0219 2.80342 21.7602 3.03311 22.2523 3.22451C22.9031 3.47607 23.3734 3.78232 23.8602 4.26904C24.3523 4.76123 24.6531 5.22607 24.9047 5.87686C25.0961 6.36904 25.3258 7.11279 25.3859 8.47451C25.4516 9.95107 25.468 10.394 25.468 14.1292C25.468 17.8698 25.4516 18.3128 25.3859 19.7839C25.3258 21.1511 25.0961 21.8894 24.9047 22.3815C24.6531 23.0323 24.3469 23.5026 23.8602 23.9894C23.368 24.4815 22.9031 24.7823 22.2523 25.0339C21.7602 25.2253 21.0164 25.455 19.6547 25.5151C18.1781 25.5808 17.7352 25.5972 14 25.5972C10.2594 25.5972 9.81641 25.5808 8.34531 25.5151C6.97813 25.455 6.23984 25.2253 5.74766 25.0339C5.09688 24.7823 4.62656 24.4761 4.13984 23.9894C3.64766 23.4972 3.34687 23.0323 3.09531 22.3815C2.90391 21.8894 2.67422 21.1456 2.61406 19.7839C2.54844 18.3073 2.53203 17.8644 2.53203 14.1292C2.53203 10.3886 2.54844 9.9456 2.61406 8.47451C2.67422 7.10732 2.90391 6.36904 3.09531 5.87686C3.34687 5.22607 3.65313 4.75576 4.13984 4.26904C4.63203 3.77686 5.09688 3.47607 5.74766 3.22451C6.23984 3.03311 6.98359 2.80342 8.34531 2.74326C9.81641 2.67764 10.2594 2.66123 14 2.66123ZM14 0.140137C10.1992 0.140137 9.72344 0.156543 8.23047 0.222168C6.74297 0.287793 5.72031 0.528418 4.83437 0.872949C3.91016 1.23389 3.12813 1.70967 2.35156 2.4917C1.56953 3.26826 1.09375 4.05029 0.732812 4.96904C0.388281 5.86045 0.147656 6.87764 0.0820313 8.36514C0.0164063 9.86357 0 10.3394 0 14.1401C0 17.9409 0.0164063 18.4167 0.0820313 19.9097C0.147656 21.3972 0.388281 22.4198 0.732812 23.3058C1.09375 24.23 1.56953 25.012 2.35156 25.7886C3.12813 26.5651 3.91016 27.0464 4.82891 27.4019C5.72031 27.7464 6.7375 27.987 8.225 28.0526C9.71797 28.1183 10.1937 28.1347 13.9945 28.1347C17.7953 28.1347 18.2711 28.1183 19.7641 28.0526C21.2516 27.987 22.2742 27.7464 23.1602 27.4019C24.0789 27.0464 24.8609 26.5651 25.6375 25.7886C26.4141 25.012 26.8953 24.23 27.2508 23.3112C27.5953 22.4198 27.8359 21.4026 27.9016 19.9151C27.9672 18.4222 27.9836 17.9464 27.9836 14.1456C27.9836 10.3448 27.9672 9.86904 27.9016 8.37607C27.8359 6.88857 27.5953 5.86592 27.2508 4.97998C26.9062 4.05029 26.4305 3.26826 25.6484 2.4917C24.8719 1.71514 24.0898 1.23389 23.1711 0.878418C22.2797 0.533887 21.2625 0.293262 19.775 0.227637C18.2766 0.156543 17.8008 0.140137 14 0.140137Z" fill="white"/>
                  <path d="M14 6.94873C10.0297 6.94873 6.80859 10.1698 6.80859 14.1401C6.80859 18.1104 10.0297 21.3315 14 21.3315C17.9703 21.3315 21.1914 18.1104 21.1914 14.1401C21.1914 10.1698 17.9703 6.94873 14 6.94873ZM14 18.805C11.4242 18.805 9.33516 16.7159 9.33516 14.1401C9.33516 11.5644 11.4242 9.47529 14 9.47529C16.5758 9.47529 18.6648 11.5644 18.6648 14.1401C18.6648 16.7159 16.5758 18.805 14 18.805Z" fill="white"/>
                  <path d="M23.1547 6.66426C23.1547 7.59395 22.4 8.34317 21.4758 8.34317C20.5461 8.34317 19.7969 7.58848 19.7969 6.66426C19.7969 5.73457 20.5516 4.98535 21.4758 4.98535C22.4 4.98535 23.1547 5.74004 23.1547 6.66426Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_282">
                    <rect y="0.140137" width="28" height="28" rx="10" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg className="social-icon" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_283)">
                  <rect y="0.140137" width="28" height="28" rx="10" fill="black"/>
                  <path d="M14 0.140137C6.26808 0.140137 0 6.40822 0 14.1401C0 20.7056 4.52032 26.2149 10.6182 27.728V18.4185H7.73136V14.1401H10.6182V12.2966C10.6182 7.53158 12.7747 5.32294 17.453 5.32294C18.34 5.32294 19.8705 5.4971 20.4966 5.6707V9.5487C20.1662 9.51398 19.5922 9.49662 18.8793 9.49662C16.5838 9.49662 15.6968 10.3663 15.6968 12.627V14.1401H20.2698L19.4841 18.4185H15.6968V28.0377C22.629 27.2005 28.0006 21.2981 28.0006 14.1401C28 6.40822 21.7319 0.140137 14 0.140137Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_283">
                    <rect y="0.140137" width="28" height="28" rx="10" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <svg className="social-icon" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.140137" width="28" height="28" rx="10" fill="black"/>
                <path d="M21.3808 2.36133H25.3165L16.7181 12.1887L26.8334 25.5616H18.9132L12.7098 17.451L5.61169 25.5616H1.67359L10.8704 15.0501L1.16675 2.36133H9.28804L14.8954 9.77472L21.3808 2.36133ZM19.9994 23.2059H22.1803L8.10304 4.59332H5.76279L19.9994 23.2059Z" fill="white"/>
              </svg>

              <svg className="social-icon" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16.1402" cy="16.1402" r="16.1402" fill="#100F0F"/>
                <path d="M24.7483 11.2179C24.1548 11.47 23.5089 11.6515 22.8436 11.7221C23.5343 11.318 24.0516 10.6796 24.2983 9.92667C23.6501 10.3064 22.9401 10.5726 22.1996 10.7136C21.8901 10.3878 21.5158 10.1283 21.1 9.95113C20.6842 9.77401 20.2358 9.6831 19.7827 9.68409C17.9497 9.68409 16.4755 11.1472 16.4755 12.9427C16.4755 13.1948 16.5066 13.4469 16.557 13.6895C13.8124 13.5482 11.3645 12.257 9.73706 10.28C9.44053 10.7788 9.28513 11.3467 9.28705 11.9246C9.28705 13.0554 9.87089 14.0524 10.7612 14.6388C10.2365 14.6185 9.72414 14.4765 9.26571 14.2243V14.2645C9.26571 15.8479 10.4024 17.1601 11.9173 17.4619C11.6328 17.5347 11.3402 17.5719 11.0463 17.5727C10.831 17.5727 10.6274 17.5517 10.4218 17.5231C10.8407 18.8143 12.0608 19.7521 13.5136 19.7827C12.377 20.6594 10.9532 21.1751 9.40731 21.1751C9.12993 21.1751 8.87389 21.1656 8.60815 21.135C10.0746 22.0614 11.8145 22.5962 13.6882 22.5962C19.7711 22.5962 23.0996 17.6338 23.0996 13.3266C23.0996 13.1853 23.0996 13.0439 23.0899 12.9026C23.7339 12.4384 24.2983 11.8635 24.7483 11.2179Z" fill="white"/>
              </svg>

              <svg className="social-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_288)">
                  <rect x="0.280273" y="0.140137" width="28" height="28" rx="10" fill="black"/>
                  <path d="M28.0014 8.54023C28.0014 8.54023 27.7279 6.60977 26.8857 5.76211C25.8193 4.64648 24.6271 4.64102 24.0803 4.57539C20.1646 4.29102 14.2857 4.29102 14.2857 4.29102H14.2748C14.2748 4.29102 8.3959 4.29102 4.48027 4.57539C3.9334 4.64102 2.74121 4.64648 1.6748 5.76211C0.832617 6.60977 0.564648 8.54023 0.564648 8.54023C0.564648 8.54023 0.280273 10.8098 0.280273 13.0738V15.1957C0.280273 17.4598 0.55918 19.7293 0.55918 19.7293C0.55918 19.7293 0.832617 21.6598 1.66934 22.5074C2.73574 23.623 4.13574 23.5848 4.75918 23.7051C7.00137 23.9184 14.2803 23.984 14.2803 23.984C14.2803 23.984 20.1646 23.973 24.0803 23.6941C24.6271 23.6285 25.8193 23.623 26.8857 22.5074C27.7279 21.6598 28.0014 19.7293 28.0014 19.7293C28.0014 19.7293 28.2803 17.4652 28.2803 15.1957V13.0738C28.2803 10.8098 28.0014 8.54023 28.0014 8.54023ZM11.3873 17.7715V9.90195L18.9506 13.8504L11.3873 17.7715Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_288">
                    <rect x="0.280273" y="0.140137" width="28" height="28" rx="10" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Enter Name" />
              </div>
              <div className="input-group">
                <label className="input-label">E-mail</label>
                <input type="email" className="form-input" placeholder="Enter mail" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Phone-Number</label>
                <input type="tel" className="form-input" placeholder="Enter Number" />
              </div>
              <div className="input-group">
                <label className="input-label">Order-Type</label>
                <input type="text" className="form-input" placeholder="Enter order type" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Order-Date</label>
                <input type="text" className="form-input" placeholder="Enter Date" />
              </div>
              <div className="input-group">
                <label className="input-label">Number of Guests / Boxes</label>
                <input type="number" className="form-input" placeholder="Enter Number" />
              </div>
            </div>

            <div className="message-group">
              <label className="message-label">Message</label>
              <textarea className="message-input" placeholder="Write your message.."></textarea>
            </div>

            <button className="send-message-btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
