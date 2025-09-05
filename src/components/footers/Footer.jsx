import React from 'react';
import './Footer.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TamilChecker from '../TamilChecker';
const Footer = () => {
  return (
    <Container className="footer-container  mt-5">
      <Row>
        <Col sm={4}>
          <img
            height="100px"
            className='mb-2'
            src="https://api.builder.io/api/v1/image/assets/TEMP/5eec29ce429f648f402b6ca0fb037540299f7c32?width=300"
            alt=""
          />
          {/* Bottom decorative image */}
          <img
            height='100px'
            src="https://api.builder.io/api/v1/image/assets/TEMP/eb815f9cce3a850a3adec1ed6ace2c641fecbb18?width=300"
            alt=""
          />
          {/* Top decorative image */}
        </Col>
        <Col sm={4}>
          {/* Contact Info Section */}
          <section className="contact-section">
            <h2 className="contact-title">CONTACT INFO</h2>
            {/* Phone Number */}
            <div className="contact-item phone-item">
              <svg className="phone-icon" width="82" height="81" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5571 29.2935C30.6444 43.1714 35.9109 48.7085 49.309 54.6063L43.5027 62.7609C28.1175 55.3951 20.4544 42.9788 16.8453 33.2893L25.5571 29.2935Z" fill="#9A0002" />
                <path d="M29.8248 10.1341C32.545 10.1235 34.6134 12.387 34.4279 14.9501C34.1361 18.9835 34.4468 21.8935 35.2833 25.5007C35.7429 27.4821 34.7033 29.4945 33.0513 30.7907C30.8246 32.5377 29.1234 34.7639 27.7714 36.6802C25.8974 39.3363 19.4483 39.1455 18.0221 36.2519C15.091 30.3051 13.1046 19.3491 17.3849 11.947C18.0572 10.7843 19.4109 10.1748 20.8136 10.1693L29.8248 10.1341Z" fill="#9A0002" />
                <path d="M71.1173 54.1403C71.4557 51.5912 69.325 49.3798 66.6085 49.2454C62.3335 49.0339 59.3119 48.3927 55.6208 47.1746C53.5932 46.5055 51.3528 47.2381 49.7916 48.6311C47.6873 50.5086 45.1427 51.8358 42.9657 52.873C39.9482 54.3105 39.3733 60.3798 42.2434 62.065C48.1421 65.5282 59.4199 68.7081 67.7156 65.5853C69.0187 65.0948 69.8222 63.8989 69.9966 62.5844L71.1173 54.1403Z" fill="#9A0002" />
              </svg>
              <span className="contact-text">+91 7824099400</span>
            </div>
            {/* Email */}
            <div className="contact-item email-item">
              <svg className="email-icon" width="68" height="50" viewBox="0 0 68 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M67.6499 1.65098C67.8718 1.47337 68 1.21115 68 0.934765C68 0.418508 67.5614 0 67.0203 0H1.52087C0.680918 0 0 0.649685 0 1.45111C0 1.88251 0.201168 2.29154 0.548927 2.56723L32.4798 27.8811C33.1757 28.4328 34.1854 28.4305 34.8786 27.8759L67.6499 1.65098ZM3.06762 9.98123C1.84813 9.01445 0 9.84192 0 11.3547V48.2143C0 49.2005 0.837925 50 1.87156 50H66.1284C67.1621 50 68 49.2005 68 48.2143V10.6373C68 9.12063 66.1437 8.29446 64.9258 9.26907L35.0912 33.1439L34.8917 33.3035C34.1985 33.8582 33.1888 33.8604 32.493 33.3088L32.2927 33.15L3.06762 9.98123Z" fill="#9A0002" />
              </svg>
              <span className="contact-text">yatrascookingcave@gmail.com</span>
            </div>
            {/* Address */}
            <div className="contact-item address-item">
              <svg className="location-icon" width="44" height="57" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.5848 56.1928C13.3275 47.1218 -0.716971 34.245 0.0285209 20.238C1.24818 8.85045 10.434 0 21.5848 0C32.7356 0 41.9215 8.85045 43.1412 20.238C43.6553 35.5322 30.9666 46.1149 21.5848 56.1928Z" fill="#9A0002" />
                <path d="M30.1804 21.3145C30.1804 26.4274 26.2403 30.5723 21.38 30.5723C16.5198 30.5723 12.5797 26.4274 12.5797 21.3145C12.5797 16.2015 16.5198 12.0566 21.38 12.0566C26.2403 12.0566 30.1804 16.2015 30.1804 21.3145Z" fill="#E5E5E5" />
              </svg>
              <div className="address-text">
                {TamilChecker() ? <b>கந்தன் குடில் ,<br /></b> : <b>Kandan kudil , <br /></b>}
                {TamilChecker() ? <p>எண் 7,<br />அண்ணா நகர் மேற்கு,<br />சென்னை - 600040.</p> : <p>No-7,<br />Anna Nagar West,<br />Chennai - 600040</p>}
              </div>
            </div>
          </section>
        </Col>
        <Col sm={4}>
          {/* Quick Links Section */}
          <section className="quick-links-section">
            <h2 className="quick-links-title">QUICK LINKS</h2>
            <nav className="footer-nav f">
              <Link to="/" className="footer-nav-item text-decoration-none ">HOME</Link>
              <Link to="/ContactUs" className="footer-nav-item text-decoration-none">CONTACT US</Link>
              <Link to="/about" className="footer-nav-item text-decoration-none">ABOUT US</Link>
              <Link to="/services" className="footer-nav-item text-decoration-none">SERVICES</Link>
            </nav>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
