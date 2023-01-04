import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FaLinkedinIn} from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>By Roman Surkov</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/roman-surkoff/"
                               style={{color: "white"}}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
