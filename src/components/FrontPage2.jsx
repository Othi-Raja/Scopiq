import React from 'react';
import './FrontPage2.css';
import Marquee from "react-fast-marquee";
import fishimg from '../assets/fish.png'
import chickenimg from '../assets/chicken.png'
import prawnimg from '../assets/prawn.png'
import Navbar from './Navbar';
import { Card, Col, Container, Row } from 'react-bootstrap';
const FrontPage2 = () => {
  const cards = [
    { title: "SERVICES", className: "services-card" },
    { title: "ORDER NOW", className: "order-card" },
    { title: "ABOUT US", className: "about-card" },
    { title: "CONTACT US", className: "contact-card" },
  ];
  return (
    <div className="front-page-2 bg-[#9a0002] vh-100">
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
        {/* Welcome title */}
        <h1 className=" text-white fs-1 fw-bolder">
          WELCOME TO
        </h1>
        <h1 className=" text-white fw-bolder">   YATRA'S COOKING CAVE</h1>
      </div>
      <Container className="mt-4">
        <Row className="g-4">
          {cards.map((card, index) => (
            <Col key={index} sm={6}>
              <Card className={`mb-3${card.className}`} style={{ height: "250px" }}>
                <Card.Body className="d-flex justify-content-center align-items-center">
                  <h4>{card.title}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default FrontPage2;
