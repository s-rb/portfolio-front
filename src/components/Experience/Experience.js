import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
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
                Working <strong className="blue">timeline</strong>
            </h1>
            <ExperienceCard />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Experience;
