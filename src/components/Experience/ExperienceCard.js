import React from "react";
import Card from "react-bootstrap/Card";
import {ExperienceData, NotRelevantExperienceData} from "./ExperienceData";
import {TimeLine} from "./TimeLine";

function ExperienceCard() {
    // const expData = [];
    // ExperienceData.forEach(o => expData.push(o));
    // NotRelevantExperienceData.forEach(o => expData.push(o));

    return (
        <Card className="quote-card-view">
            <Card.Body>
                <TimeLine expData={[].concat(...ExperienceData, ...NotRelevantExperienceData)} listKey={1}/>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;
