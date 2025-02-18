import React from "react";
import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <h1 className="mainhead text-center">
        Empowering Fashion with Sustainable Solutions
      </h1>
      <Container>
        {/* First Section */}
        <Row className="my-5 align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h2 className="head1">Recycled with Care</h2>
            <p className="para">
              A big part of our vision for MANVAN is to produce our clothing as
              close as possible to 100% made from sustainable materials. This
              led us to unearthing fabric innovations that use recycled bottles,
              garments, and fishing nets to create high-quality fibers.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://media.istockphoto.com/id/626855602/photo/men-clothing.jpg?s=612x612&w=0&k=20&c=7k0W26sB7OXtgB7O7dZOGAuhYYpk1pJXytta8sGi7CE="
              alt="About Us"
              className="img-fluid w-100 h-auto rounded"
            />
          </Col>
        </Row>

        {/* Second Section */}
        <Row className="my-5 align-items-center flex-column-reverse flex-md-row">
          <Col md={6} className="text-center">
            <img
              src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg"
              alt="Our Story"
              className="img-fluid w-100 h-auto rounded"
            />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h2 className="head2">Giving Garments a Second Life</h2>
            <p className="para">
              When you're ready to retire a piece of MANVAN apparel, send it
              back, and we'll give it another life while you get a 20% discount
              on your next purchase.
            </p>
          </Col>
        </Row>

        {/* Third Section */}
        <Row className="my-5 align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h2 className="head3">
              WRAP Certification and Better Work Program Initiatives
            </h2>
            <p className="para">
              Sustainability also means caring for the people who make our
              vision possible. Our factories adhere to high ethical and safety
              standards, including WRAP certification.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://images.pexels.com/photos/4792058/pexels-photo-4792058.jpeg"
              alt="Our Values"
              className="img-fluid w-100 h-auto rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
