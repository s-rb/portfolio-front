import React from "react";
import {Card} from "react-bootstrap";


export const TimeLineItem = ({data, companies, theKey}) => {
    return (
        <li key={theKey} className="timeline-item">
            <Card className="mb-4 p-1 timeline-item-content" bg="dark">
                <Card.Body className="timeline-item-card">
                    {data.period && <Card.Text className="timeline-period">{data.period.started} - {data.period.finished ? data.period.finished : 'now'}</Card.Text>}
                    {data.position && <Card.Title className="timeline-company">{data.position}</Card.Title>}
                    {data.company && <Card.Link className="timeline-company-url"
                                                     href={companies[data.company].url}
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                    >{companies[data.company].name ? companies[data.company].name : data.company}</Card.Link>}
                    <span className="circle"/>
                </Card.Body>
            </Card>
        </li>
    )
}