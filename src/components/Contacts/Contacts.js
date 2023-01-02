import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {AiFillGithub} from "react-icons/ai";
import {FaEnvelope, FaLinkedinIn} from "react-icons/fa";

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
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://github.com/s-rb"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/roman-surkoff"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="mailto:surkoff.com@google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;
