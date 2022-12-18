import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiApachekafka,
    SiApachemaven,
    SiBitbucket,
    SiConfluence,
    SiCsharp,
    SiCss3,
    SiDocker,
    SiElastic,
    SiGit,
    SiGradle,
    SiHtml5,
    SiIntellijidea,
    SiJava,
    SiJavascript,
    SiJenkins,
    SiJunit5,
    SiKibana,
    SiMysql,
    SiNodedotjs,
    SiOracle,
    SiPostgresql,
    SiPostman,
    SiProbot,
    SiRabbitmq,
    SiReact,
    SiSlack,
    SiSpring,
    SiTalend,
    SiTeamcity,
    SiTelegram,
    SiTypescript,
    SiUbuntu,
    SiUnity,
    SiWebstorm
} from "react-icons/si";
import {TbApi, TbDatabase} from "react-icons/tb";
import {MdSchema} from "react-icons/md";
import Container from "react-bootstrap/Container";

function Techstack() {
    return (
        <Container>
            <h1 className="project-heading">Primary <strong className="blue">Stack</strong></h1>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-icons"><SiJava/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiSpring/></Col>
                <Col xs={4} md={2} className="tech-icons"><TbDatabase/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiPostgresql/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiMysql/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiGradle/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiApachemaven/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiApachekafka/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiIntellijidea/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiGit/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiJunit5/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiDocker/></Col>
                <Col xs={4} md={2} className="tech-icons"><TbApi/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiPostman/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTalend/></Col>
                <Col xs={4} md={2} className="tech-icons"><MdSchema/></Col>
            </Row>
            <h1 className="project-heading">Secondary <strong className="blue">Stack</strong></h1>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-icons"><SiConfluence/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTeamcity/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiKibana/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiBitbucket/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiElastic/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiSlack/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiJenkins/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiOracle/></Col>
            </Row>
            <h1 className="project-heading">Hobby <strong className="blue">Stack</strong></h1>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-icons"><SiTelegram/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiProbot/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiUbuntu/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiJavascript/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTypescript/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiReact/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiWebstorm/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiNodedotjs/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiHtml5/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiCss3/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiRabbitmq/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiCsharp/></Col>
                <Col xs={4} md={2} className="tech-icons"><SiUnity/></Col>
            </Row>
        </Container>
    );
}

export default Techstack;
