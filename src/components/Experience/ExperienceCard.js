import React from "react";
import Card from "react-bootstrap/Card";
import {ExperienceData, NotRelevantExperienceData} from "./ExperienceData";
import {TimeLine} from "./TimeLine";

function ExperienceCard() {
    const expData = [];
    ExperienceData.forEach(o => expData.push(o));
    NotRelevantExperienceData.forEach(o => expData.push(o));
    console.log(expData);

    return (
        <Card className="quote-card-view">
            <Card.Body>
                {/*<p style={{textAlign: "justify"}}>*/}
                {/*    <br/>2021 - now: <span>It-one</span> - <span className="blue">Senior software engineer</span>*/}
                {/*    <br/>2020 - 2021: <span>Colvir</span> - <span className="blue">Programmer</span>*/}
                {/*    <br/>2019 - 2020: <span>Codemark</span> - <span className="blue">Java developer</span>*/}
                {/*    <br/>2019: <span>Skillbox</span> - <span>Student at course Java-developer</span>*/}
                {/*    <br/>*/}
                {/*    <br/>2009 - 2019: <span>Not relevant experience:</span>*/}
                {/*    <br/>2018 - 2019: <span>Nipigas</span> - <span className="blue">Expert at reporting and planning department</span>*/}
                {/*    <br/>2015 - 2018: <span>Ernst & Young</span> - <span className="blue">Contractor at Power Plant reconstruction</span>*/}
                {/*    <br/>2013 - 2015: <span>Systems & networks</span> - <span className="blue">Chief engineer</span>*/}
                {/*    <br/>2009 - 2013: <span>Electrotechnical systems</span> - <span className="blue">Lead electrical engineer</span>*/}
                {/*</p>*/}
                <TimeLine expData={expData} listKey={1}/>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;
