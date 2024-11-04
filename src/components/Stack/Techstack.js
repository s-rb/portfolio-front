import React from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import defaultTechStack from "../../data/techStack";

const isSVG = (icon) => {
    return icon && icon.endsWith('.svg');
};

const InlineSVG = ({ src }) => {
    const [svgContent, setSvgContent] = React.useState('');

    React.useEffect(() => {
        const fetchSVG = async () => {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    const text = await response.text();
                    setSvgContent(text);
                } else {
                    console.error('Failed to fetch SVG:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching SVG:', error);
            }
        };

        fetchSVG();
    }, [src]);

    return (
        <div
            className="tech-icon-svg"
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

function Techstack() {
    let techStack  = defaultTechStack; // Данные по умолчанию
    // // Проверяем, существует ли файл с загруженными данными
    try {
        techStack = require("../../data/fetchedTechStack.json");
    } catch (error) {
        console.log("Using default local data");
    }

    return (
        <Container>
            <h1 className="project-heading">Primary <strong className="blue">Stack</strong></h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {techStack && techStack.primary && techStack.primary.length > 0
                    && techStack.primary.map((o, idx) =>
                            o?.title && o?.icon
                            && <Col key={idx} xs={4} md={2} className="tech-icons">
                                {isSVG(o.icon)
                                    ? <InlineSVG src={`/assets/images/icons/${o.icon}`} />
                                    : <img alt={`${o.title}-icon`} src={`/assets/images/icons/${o.icon}`} style={{ width: '1em', height: '1em' }} />}
                                <p className="tech-icon-text">{o.title}</p>
                            </Col>
                    )}
            </Row>
            <h1 className="project-heading">Secondary <strong className="blue">Stack</strong></h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techStack && techStack.secondary && techStack.secondary.length > 0
                && techStack.secondary.map((o, idx) =>
                        o?.title && o?.icon
                        && <Col key={idx} xs={4} md={2} className="tech-icons">
                            {isSVG(o.icon)
                                ? <InlineSVG src={`/assets/images/icons/${o.icon}`} />
                                : <img alt={`${o.title}-icon`} src={`/assets/images/icons/${o.icon}`} style={{ width: '1em', height: '1em' }} />}
                            <p className="tech-icon-text">{o.title}</p>
                        </Col>
                )}
            </Row>
            <h1 className="project-heading">Hobby <strong className="blue">Stack</strong></h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {techStack && techStack.hobby && techStack.hobby.length > 0
                    && techStack.hobby.map((o, idx) =>
                            o?.title && o?.icon
                            && <Col key={idx} xs={4} md={2} className="tech-icons">
                                {isSVG(o.icon)
                                    ? <InlineSVG src={`/assets/images/icons/${o.icon}`} />
                                    : <img alt={`${o.title}-icon`} src={`/assets/images/icons/${o.icon}`} style={{ width: '1em', height: '1em' }} />}
                                <p className="tech-icon-text">{o.title}</p>
                            </Col>
                    )}
            </Row>
        </Container>
    );
}

export default Techstack;