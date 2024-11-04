import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import defaultProjectsData from "../../data/projectsData.json";

// todo Сделать всплывающее описание по нажатию или наведению
function Projects() {
    let projectsData  = defaultProjectsData; // Данные по умолчанию
    // // Проверяем, существует ли файл с загруженными данными
    try {
        projectsData = require("../../data/fetchedProjects.json");
    } catch (error) {
        console.log("Using default local data");
    }


    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My recent <strong className="blue">Projects</strong>
                </h1>
                <p style={{color: "white"}}>
                    Here you can see some of my <strong className="blue">side</strong> projects
                </p>

                <Row lg={3} sm={1} md={2} xs={1} style={{justifyContent: "center", paddingBottom: "10px"}}>
                    {projectsData && projectsData.length > 0 && projectsData.map((o, idx) =>
                        <Col className="project-card">
                            <ProjectCard
                                imgPath={`/${o.image}`}
                                title={o.name}
                                description={o.description}
                                technologies={o.technologies}
                                links={o.links}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
