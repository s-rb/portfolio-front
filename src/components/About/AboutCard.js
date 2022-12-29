import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 p-3">
          <p style={{ textAlign: "justify" }}>
            Hello everybody. My name is <span className="blue">Roman Surkov </span>
            <br />I am a <span className="blue">software engineer</span> and I'm very passionate and dedicated to my work
            <br />Though I'm a full-time employed programmer, I like to develop side projects and learn new technologies, when I have spare time
            <br />Here you can see my presentation, technologies and languages used by me (e.i. tech-stack) and some of my side projects
            <br />Feel free to contact me in any case
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
