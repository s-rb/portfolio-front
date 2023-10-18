import React from "react";
import Card from "react-bootstrap/Card";
import {Summary} from "../../Summary";

function AboutCard() {
    return (

        <Card className="quote-card-view">
            <div className="blockquote mb-0 p-3" style={{textAlign: "justify"}}>
                <div style={{ textAlign: "center"}}><p>Hello everybody. My name is <span className="blue">Roman Surkov </span></p></div>
                <div style={{fontSize: "1.05rem"}}>{Summary}</div>
            </div>
        </Card>
    );
}

export default AboutCard;
