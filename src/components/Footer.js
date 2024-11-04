import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FaEnvelope, FaLinkedinIn} from "react-icons/fa";

// todo сделать через медиасайз
function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    let myCvLink = "/cv/Roman_Surkov_Cv.pdf";
    // // Проверяем, существует ли файл с загруженными данными
    try {
        const file = require("../data/Roman_Surkov_CV_updated.pdf");
        console.log("File has found: " + file)
        myCvLink = "/cv/Roman_Surkov_CV_updated.pdf";
    } catch (error) {
        console.log("Using default local data");
    }

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copyright">
                    <h3>By Roman Surkov</h3>
                </Col>
                <Col md="4" className="footer-copyright">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons" key={'fs0'}>
                            <a href="https://www.linkedin.com/in/roman-surkoff/"
                               style={{color: "white"}}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>

                        <li className="social-icons" key={'fs1'}>
                            <a
                                href="mailto:surkoff.com@google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{color: "white"}}
                            >
                                <FaEnvelope />
                            </a>
                        </li>

                        <li className="social-icons" key={'s4'}>
                            <a
                                href={myCvLink}
                                download={"Roman_Surkov_CV.pdf"}
                                target="_blank"
                                style={{color: "white", textDecoration: "none" }}
                            >
                                CV
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
