import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";

// import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
           <Col
            // md={10}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am <strong className="blue">I?</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/*<Col*/}
          {/*  md={5}*/}
          {/*  style={{ paddingTop: "0px", paddingBottom: "0px" }}*/}
          {/*  className="about-img"*/}
          {/*>*/}
          {/*  /!* <img src={laptopImg} alt="about" className="img-fluid" /> *!/*/}
          {/*</Col>*/}
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
