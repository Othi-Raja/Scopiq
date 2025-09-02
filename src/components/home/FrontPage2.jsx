import React from 'react';
import './FrontPage2.css';
import Marquee from "react-fast-marquee";
import fishimg from '../../assets/fish.png'
import chickenimg from '../../assets/chicken.png'
import prawnimg from '../../assets/prawn.png'
import { Card, Col, Container, Row } from 'react-bootstrap';
import servicebg from '../../assets/servicebg.png'
import aboutcCardBg from '../../assets/aboutcCardBg.jpg'
import TamilChecker from '../TamilChecker';
import Footer from '../footers/Footer';
import Navbar from '../Navbar';
const FrontPage2 = () => {
  const cards = [
    {
      title: { en: "SERVICES", ta: "சேவைகள்" },
      className: "services-card",
      bg: servicebg,
      link: "/services"
    },
    {
      title: { en: "ORDER NOW", ta: "இப்போது ஆர்டர் செய்யவும்" },
      className: "order-card",
      bg: servicebg,
      link: "/orders"
    },
    {
      title: { en: "ABOUT US", ta: "எங்களை பற்றி" },
      className: "about-card",
      bg: aboutcCardBg,
      link: "/about"
    },
    {
      title: { en: "CONTACT US", ta: "எங்களை தொடர்பு கொள்ள" },
      className: "contact-card",
      bg: servicebg,
      link: "/ContactUs"
    },
  ];
  return (
    <div>
      <div className="front-page-2 bg-[#9a0002] mb-2 ">
        <Navbar />
        <Marquee autoFill style={{
          zIndex: 1
        }} >
          {/* Background decorative images */}
          <img
            className="decorative-image left-image "
            style={{
              height: "300px",
              width: "300px",
            }}
            src={fishimg}
            alt="Decorative food background"
          />
          <img
            style={{
              height: "300px",
              width: "300px",
            }}
            className="decorative-image right-image"
            src={chickenimg}
            alt="Decorative food background"
          />
          {/* Central oval image */}
          <img
            style={{
              height: "300px",
              width: "300px",
            }}
            className="central-food-image"
            src={prawnimg}
          />
        </Marquee>
        <div className=' text-center'>
          {TamilChecker() ? (
            <>
              <h3 className=" text-white  fw-bold  mt-4 pt-4">வணக்கம் </h3>
              <h3 className=" text-white fw-bold mb-4  pb-4">யாத்ராவின் சமையல் குகைக்கு வருக</h3>
            </>
          ) :
            (<>
              <h1 className=" text-white  mt-4 pt-4"> HELLO WELCOME</h1>
              <h1 className=" text-white mb-4  pb-4">TO YATRA'S COOKING CAVE</h1>
            </>
            )
          }
        </div>
        <Container className="mt-4 pb-4">
          <Row className="g-4 mb-5">
            {cards.map((card, index) => (
              <Col key={index} sm={6}>
                <Card
                  className={`feature-card cursor-pointer mb-3 ${card.className}`}
                  onClick={() => window.location.href = card.link}
                  style={{
                    height: "250px",
                    "--bg-url": `url(${card.bg})`
                  }}
                >
                  <Card.Body className="card-overlay d-flex justify-content-center align-items-center">
                    {
                      TamilChecker() ? (
                        <h4 className="overlay-title m-0">{card.title.ta}</h4>
                      ) : (
                        <h4 className="overlay-title m-0">{card.title.en}</h4>
                      )
                    }
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default FrontPage2;
