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
                {props.links && props.links.length > 0 && props.links.map((o, idx) =>
                    <Button className="project-description-btn" variant="primary" href={o.link} target="_blank">
                    <BsPaperclip/> &nbsp;{o.name.length > 12 ? o.name.substring(0, 12) + '...' : o.name}
                </Button>)}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
