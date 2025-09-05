import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import TamilChecker from "../TamilChecker";
import Navbar from "../Navbar";
import Footer from "../footers/Footer";
import Timeline from '../timeline.jsx'
import img1 from '../../assets/card/1.jpg'
import img2 from '../../assets/other/aboutpgimag3.jpg'
import img3 from '../../assets/card/img3.jpg'
import img4 from '../../assets/aboutpg/image4.jpg'
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
      image1: img1,
      image2: img2,
    },
    {
      title: "",
      description:
        "Founded in 2009 by Gayathri Priya Durai, what began as a humble restaurant in Chennai soon transformed into something much more personal and heartfelt — a home kitchen built on passion, tradition, and flavor. Over the years, our journey has been shaped not just by recipes, but by memories, love, and the joy of sharing food that feels like home . This is more than just food; it is a promise of authenticity, a connection to tradition, and an invitation to experience the flavors that have nourished families for generations. Each meal is our way of bringing people closer  — to their roots, to each other, and to the joy that only good food can create.",
      tamildescription: "2009 ஆம் ஆண்டு காயத்ரி பிரியா துரை அவர்களால் நிறுவப்பட்ட, சென்னையில் ஒரு எளிமையான உணவகமாகத் தொடங்கிய இது, விரைவில் மிகவும் தனிப்பட்ட மற்றும் இதயப்பூர்வமான ஒன்றாக மாறியது - ஆர்வம், பாரம்பரியம் மற்றும் சுவையின் அடிப்படையில் கட்டமைக்கப்பட்ட ஒரு வீட்டு சமையலறை. பல ஆண்டுகளாக, எங்கள் பயணம் சமையல் குறிப்புகளால் மட்டுமல்ல, நினைவுகள், அன்பு மற்றும் வீடு போன்ற உணவைப் பகிர்ந்து கொள்வதன் மகிழ்ச்சி ஆகியவற்றால் வடிவமைக்கப்பட்டுள்ளது. இது வெறும் உணவை விட அதிகம்; இது நம்பகத்தன்மையின் வாக்குறுதி, பாரம்பரியத்துடனான தொடர்பு மற்றும் தலைமுறைகளாக குடும்பங்களை வளர்த்து வரும் சுவைகளை அனுபவிக்க ஒரு அழைப்பு. ஒவ்வொரு உணவும் மக்களை நெருக்கமாகக் கொண்டுவருவதற்கான எங்கள் வழியாகும் - அவர்களின் வேர்களுக்கு, ஒருவருக்கொருவர், மற்றும் நல்ல உணவு மட்டுமே உருவாக்கக்கூடிய மகிழ்ச்சிக்கு",
      image1: img3,
      image2: img4,
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
                  <Col md={6} className="">
                    <img
                      style={{ height: "300px", maxWidth: '400px' }}
                      src={item.image1}
                      draggable={false}
                      alt="image"
                      className="img-fluid rounded-4 mb-4"
                    />
                    <img
                      style={{ height: "300px", maxWidth: '400px' }}
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
                          style={{ height: "300px", maxWidth: '400px' }}
                          className="img-fluid rounded-4 mb-4"
                          draggable={false}
                        />
                        <img
                          style={{ height: "300px", maxWidth: '400px' }}
                          src={item.image2}
                          draggable={false}
                          alt="image"
                          className=" rounded-4"
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
      <Timeline />
      <Footer />
    </div>
  );
}
