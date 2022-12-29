import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Skidka4uBot from "../../Assets/Projects/Bot.png"

// todo add projects Сделать всплывающее описание по нажатию или наведению
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="blue">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here you can see some of my own side projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Skidka4uBot}
              isBlog={false}
              title="Skidka4uBot"
              description="Skidka4uBot is a web service and a telegram bot as it's client that allows the user
              to track real sales at popular online shops. Also it allows the user to subscribe on desired sale percentage,
              item category or item key words. It uses parsers to acquire information about items: titles, categories, prices etc.
              The service checks from time to time if a price has reduced enough and if it did, the bot will send you a notification"
              technologies="Main language is Java 17. App is build using SpringBoot 2. Parsing implemented by using Selenium and Firefox browser.
              Main services developed as separate microservices. They are connected through RabbitMQ and packaged in docker containers.
              As database it uses Postgresql"
              demoLink="https://t.me/skidka_4u_bot"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
