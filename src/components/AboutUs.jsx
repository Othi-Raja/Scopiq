import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import placehold from "../assets/aboutpg/river.jpg";
import Navbar from "./Navbar";
import TamilChecker from "./TamilChecker";
import Footer from "./Footer";
import Timeline from './timeline.jsx'
import Aos from "aos";
export default function AboutUs() {
  useEffect(() => {
    Aos.init();
  })
  const aboutjson = [
    {
      title: "OUR JOURNEY",
      titleTamil: "எங்கள் பயணம்",
      description:
        "A journey filled with desire and flavor, an attempt to bring the warmth of home-cooked meals straight to your table. Our vision goes beyond just serving food we want to recreate the essence of comfort, care, and nourishment that every home-cooked dish carries. With a focus on freshness, authenticity, and balanced nutrition, we strive to deliver meals that are not only delicious but also wholesome and satisfying.",
      tamildescription: "ஆசையும் சுவையும் நிறைந்த பயணம், வீட்டில் சமைத்த உணவை உங்கள் வீட்டிற்கு கொண்டு வரும் முயற்சி. ஒவ்வொரு வீட்டிலும் கிடைக்கும் அனைவருக்கும் ஆரோக்கியமான, சுவையான மற்றும் திருப்திகரமான வீட்டில் சமைத்த உணவை வழங்குவதே எங்கள் ஒரே நோக்கம்.",
      image1: placehold,
      image2: placehold,
    },
    {
      title: "",
      description:
        "We believe in delivering meals that not only satisfy hunger but also provide a sense of home and care.We believe in delivering meals that not only satisfy hunger but also provide a sense of home and care.We believe in delivering meals that not only satisfy hunger but also provide a sense of home and care.We believe in delivering meals that not only satisfy hunger but also provide a sense of home and care.We believe in delivering meals that not only satisfy hunger but also provide a sense of home and care.We believe in delivering meals that not only satisfy hunger but also provide a sense of home and care.",
      tamildescription: "2009 ஆம் ஆண்டு காயத்ரி பிரியா துரை,தி ஹோம் செஃப் என்பவரால் நிறுவப்பட்டது.சென்னையில் ஒரு சிறிய உணவகத்திலிருந்து ஆர்வமும் சுவையும் நிறைந்த வளர்ந்து வரும் வீட்டு சமையலறை வரை - இது எங்கள் கதை, உண்மையான வீட்டில் தயாரிக்கப்பட்ட உணவின் மீதான ஆர்வத்தால் இயக்கப்படும் ஒரு பயணம்",
      image1: placehold,
      image2: placehold,
    },
  ];
  return (
    <div>
      <div className="bg-[#9a0002] text-white">
        <Navbar />
        <Container className=" section-bg"  >
          <Row className="text-center " style={{
            marginTop: "130px",
            marginBottom: "100px"
          }}>
            {TamilChecker() ? (
              <>
                <h1>வணக்கம் </h1>
                <h1>யாத்ராவின் சமையல் குகைக்கு வருக</h1>
              </>
            ) :
              (<>
                <h1> HELLO WELCOME</h1>
                <h1>TO YATRA'S COOKING CAVE</h1>
              </>
              )
            }
          </Row>
          {aboutjson.map((item, index) => (
            <Row
              key={index}
              className="align-items-center mb-5 mt-4"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Text first */}
                  <Col md={6} className="mb-3">
                    {item.title.length > 0 && (
                      <>
                        {TamilChecker()
                          ? <h2 className="fw-bold mb-3">{item.titleTamil}</h2>
                          : <h2 className="fw-bold mb-3">{item.title}</h2>}
                      </>
                    )}
                    {TamilChecker() ? <p>{item.tamildescription}</p> : <p className="text-justify">{item.description}</p>}
                  </Col>
                  {/* Images second */}
                  <Col md={6}>
                    <img
                      style={{ height: "300px" }}
                      src={item.image1}
                      draggable={false}
                      alt="image"
                      className="img-fluid rounded-4 mb-4"
                    />
                    <img
                      style={{ height: "300px" }}
                      src={item.image2}
                      draggable={false}
                      alt="image"
                      className="img-fluid rounded-4"
                    />
                  </Col>
                </>
              ) : (
                <>
                  <Container className=" section-bg-rigth " >
                    <Row>
                      {/* Images first (desktop), second (mobile) */}
                      <Col md={6} className="mb-3 order-2 order-md-1">
                        <img
                          src={item.image1}
                          alt="image"
                          style={{ height: "300px" }}
                          className="img-fluid rounded-4 mb-4"
                          draggable={false}
                        />
                        <img
                          style={{ height: "300px" }}
                          src={item.image2}
                          draggable={false}
                          alt="image"
                          className="img-fluid rounded-4"
                        />
                      </Col>
                      {/* Text second (desktop), first (mobile) */}
                      <Col md={6} className="order-1 order-md-2 d-flex justify-content-center align-items-center text-justify">
                        {item.title.length > 0 && (
                          <h2 className="fw-bold mb-3">{item.title}</h2>
                        )}
                        {TamilChecker() ? <p>{item.tamildescription}</p> : <p className="text-justify">{item.description}</p>}
                      </Col>
                    </Row>
                  </Container>
                </>
              )}
            </Row>
          ))}
        </Container>
      </div >
      <Timeline/>
      <Footer />
    </div>
  );
}
