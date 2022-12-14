import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub, BsPaperclip} from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <p style={{textAlign: "justify"}} className="project-description">{props.description}</p>
                {props.ghLink &&
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsPaperclip/> &nbsp;{props.isComp ? "Certificate" : "Code"}
                </Button>}
                {"\n"}
                {"\n"}
                {!props.isComp && props.demoLink &&
                (<Button variant="primary" href={props.demoLink} target="_blank" style={{marginLeft: "10px"}}>
                    <CgWebsite/> &nbsp;{"Try it"}
                </Button>)}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
