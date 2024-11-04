import React from "react";
import Card from "react-bootstrap/Card";
import {Summary} from "../../Summary";
import {experienceData as defaultExpData} from "../../data/experienceData";

function AboutCard() {
    let experienceData  = defaultExpData; // Данные по умолчанию
    // // Проверяем, существует ли файл с загруженными данными
    try {
        experienceData = require("../../data/fetchedWorkExperience.json");
    } catch (error) {
        console.log("Using default local data");
    }

    return (
        <Card className="quote-card-view">
            <div className="blockquote mb-0 p-3" style={{textAlign: "justify"}}>
                <div style={{ textAlign: "center"}}><p>Hello everybody. My name is <span className="blue">Roman Surkov </span></p></div>
                <div style={{fontSize: "1.05rem"}}><Summary description={experienceData?.description}/></div>
            </div>
        </Card>
    );
}

export default AboutCard;
