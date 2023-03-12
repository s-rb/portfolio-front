import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {Social} from "../Social/Social";

function Contacts() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            <p>
              Feel free to <span className="blue">contact</span>
            </p>
            <Social />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;
