import React from "react";
import Card from "react-bootstrap/Card";
import { TimeLine } from "./TimeLine";
import { experienceData as defaultExpData } from "../../data/experienceData";

function ExperienceCard() {
    let experienceData = defaultExpData; // Данные по умолчанию

    // // Проверяем, существует ли файл с загруженными данными
    try {
        experienceData = require("../../data/fetchedWorkExperience.json");
    } catch (error) {
        console.log("Using default local data");
    }

    const expData = [].concat(...experienceData.experience, ...experienceData.not_relevant_experience);

    return (
        <Card className="quote-card-view">
            <Card.Body className="timeline-card-body">
                <TimeLine expData={expData} companies={experienceData.companies} listKey={1} />
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;