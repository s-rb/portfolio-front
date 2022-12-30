import React from "react";
import {Card} from "react-bootstrap";

export const TimeLineItem = ({data, theKey}) => {
    return (
        <li key={theKey} className="timeline-item">
            <Card className="mb-4 p-1 timeline-item-content" bg="dark">
                <Card.Body>
                    {data.period && <Card.Text className="timeline-period">{data.period}</Card.Text>}
                    {data.position && <Card.Title className="timeline-company">{data.position}</Card.Title>}
                    {data.company && <Card.Link className="timeline-company-url"
                                                     href={data.company.url}
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                    >{data.company.name ? data.company?.name : data.company.url}</Card.Link>}
                    <span className="circle"/>
                </Card.Body>
            </Card>
        </li>
    )
}