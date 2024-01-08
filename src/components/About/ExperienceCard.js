import React from "react";
import Card from "react-bootstrap/Card";
import {ExperienceData, NotRelevantExperienceData} from "../../ExperienceData";
import {TimeLine} from "./TimeLine";

function ExperienceCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body className="timeline-card-body">
                <TimeLine expData={[].concat(...ExperienceData, ...NotRelevantExperienceData)} listKey={1}/>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;
