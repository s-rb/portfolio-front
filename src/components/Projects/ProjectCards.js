import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsPaperclip} from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Header><Card.Title style={{paddingTop: "1em"}}>{props.title}</Card.Title></Card.Header>
            {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img"/>}
            <Card.Body>
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
                {"\n"}
                {"\n"}
                {props.addButtonText &&
                <Button variant="primary">{props.addButtonText}</Button>}
                {"\n"}
                {"\n"}
                {props.backEnd &&
                <Button variant="primary" href={props.backEnd} target="_blank">
                    <BsPaperclip/> &nbsp;{"Back"}
                </Button>}
                {"\n"}
                {"\n"}
                {props.frontEnd &&
                <Button variant="primary" href={props.frontEnd} target="_blank">
                    <BsPaperclip/> &nbsp;{"Front"}
                </Button>}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
