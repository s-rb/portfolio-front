import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";

function Stack() {
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Techstack/>
            </Container>
        </Container>
    );
}

export default Stack;
