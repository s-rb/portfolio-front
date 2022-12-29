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
    SiJira,
    SiPostman,
    SiProbot,
    SiRabbitmq,
    SiReact,
    SiSlack,
    SiSpring,
    SiSpringboot,
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
                <Col xs={4} md={2} className="tech-icons"><SiJava/><p className="tech-icon-text">Java</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiSpring/><p className="tech-icon-text">Spring</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiSpringboot/><p className="tech-icon-text">SpringBoot</p></Col>
                <Col xs={4} md={2} className="tech-icons"><TbDatabase/><p className="tech-icon-text">Databases</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiPostgresql/><p className="tech-icon-text">Postgresql</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiMysql/><p className="tech-icon-text">Mysql</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiGradle/><p className="tech-icon-text">Gradle</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiApachemaven/><p className="tech-icon-text">Maven</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiApachekafka/><p className="tech-icon-text">Apache Kafka</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiIntellijidea/><p className="tech-icon-text">Intellij Idea</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiGit/><p className="tech-icon-text">Git</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiJunit5/><p className="tech-icon-text">JUnit</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiDocker/><p className="tech-icon-text">Docker</p></Col>
                <Col xs={4} md={2} className="tech-icons"><TbApi/><p className="tech-icon-text">REST API</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiPostman/><p className="tech-icon-text">Postman</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTalend/><p className="tech-icon-text">Talend</p></Col>
                <Col xs={4} md={2} className="tech-icons"><MdSchema/><p className="tech-icon-text">Camunda BPM</p></Col>
            </Row>
            <h1 className="project-heading">Secondary <strong className="blue">Stack</strong></h1>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-icons"><SiConfluence/><p className="tech-icon-text">Confluence</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTeamcity/><p className="tech-icon-text">Teamcity</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiKibana/><p className="tech-icon-text">Kibana</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiJira/><p className="tech-icon-text">Jira</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiBitbucket/><p className="tech-icon-text">Bitbucket</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiElastic/><p className="tech-icon-text">Elastic</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiSlack/><p className="tech-icon-text">Slack</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiJenkins/><p className="tech-icon-text">Jenkins</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiOracle/><p className="tech-icon-text">OracleDB</p></Col>
            </Row>
            <h1 className="project-heading">Hobby <strong className="blue">Stack</strong></h1>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-icons"><SiRabbitmq/><p className="tech-icon-text">RabbitMQ</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTelegram/><p className="tech-icon-text">Telegram API</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiProbot/><p className="tech-icon-text">Bots</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiUbuntu/><p className="tech-icon-text">Ubuntu</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiJavascript/><p className="tech-icon-text">Javascript</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTypescript/><p className="tech-icon-text">Typescript</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiReact/><p className="tech-icon-text">ReactJS</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiWebstorm/><p className="tech-icon-text">Webstorm</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiNodedotjs/><p className="tech-icon-text">NodeJS</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiHtml5/><p className="tech-icon-text">HTML</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiCss3/><p className="tech-icon-text">CSS</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiCsharp/><p className="tech-icon-text">C#</p></Col>
                <Col xs={4} md={2} className="tech-icons"><SiUnity/><p className="tech-icon-text">Unity</p></Col>
            </Row>
        </Container>
    );
}

export default Techstack;
