import React from "react";
import {differenceInCalendarMonths} from "date-fns";
import {Container} from "react-bootstrap";
import Particle from "../Particle";
import {Social} from "../Social/Social";
import {
    Certifications,
    CoreCompetencies,
    Education,
    EngineeringExperienceData,
    ExperienceData
} from "../Experience/ExperienceData";
import styles from './Cv.module.css';

function CV() {
    function getDateDiffString(datesStringArray) {
        let first = datesStringArray[0];
        let second = datesStringArray[1];
        let date1 = first === 'now' ? Date.now() : new Date(first.split(".")[1], first.split(".")[0]);
        let date2 = second === 'now' ? Date.now() : new Date(second.split(".")[1], second.split(".")[0]);
        let diff = differenceInCalendarMonths(date2, date1) + 1;
        if (diff % 12 === 0) return `${Math.floor(diff / 12)}y`;
        return diff / 12 < 1
            ? `${diff % 12}m`
            : `${Math.floor(diff / 12)}y ${diff % 12}m`;
    }

    function getExperienceBlock(idx, data) {
        return <div key={idx}>
            <div className={styles.cvExperienceHeader}>
                <div className={styles.cvCompany}>
                    {data.company !== null && typeof data.company === 'object' ? data.company.name : data.company}
                </div>
                <div className={styles.cvExperiencePeriodDiff}>{getDateDiffString(data.period.split(" - "))}</div>
            </div>
            <div className={styles.cvExperienceHeader}>
                <div className={styles.cvPosition}>{data.position}</div>
                <div className={styles.cvExperiencePeriod}>{data.period}</div>
            </div>
            {data.description.split("\n").map(o => <p className={styles.cvDescription}>{o}</p>)}
        </div>;
    }

    return (
        <Container fluid className="project-section" key={'p1230'}>
            <Particle key={'p1233'}/>
            <Container key={'p1234'}>
                <h1 className="project-heading">ROMAN <span className="main-color">SURKOV</span></h1>
                <Social className={styles.contacts} iconsStyle={'cvContactsIcons'}/>
                <h1 className={styles.position}>Software engineer</h1>
                <div className={styles.cvSummary}>
                    <p>I am a results-oriented and experienced Java developer with extensive knowledge in key frameworks
                        and technologies such as Spring/SpringBoot, Maven, Gradle, Git, databases, Docker, JUnit,
                        REST/SOAP, and more. I have over 4 years of experience developing and implementing complex
                        projects in various industries, including banking software and government portals.</p>
                    <p>After graduating from university in 2009, I spent 10 years working in the development of various
                        engineering systems, leading design teams and managing project implementation. However, I always
                        had a strong desire to developing software. That is why I decided to become a Java developer,
                        despite the downgrade in career.</p>
                    <p>My passion for programming drives me towards personal and career growth, with next goal to become
                        a team leader. I would be excited to join a team of professionals to solve complex challenges
                        and create innovative projects</p>
                </div>

                <h2 className={styles.cvTitle}>Core Competencies</h2>
                <ul className={styles.cvCompetencies}>
                    {CoreCompetencies.map((o, idx) => <li key={`cc${idx}`}>{o.name}</li>)}
                </ul>

                <h2 className={styles.cvTitle}>Professional experience</h2>
                {ExperienceData.map((data, idx) =>
                    getExperienceBlock(`ed${idx}`, data))}

                <h2 className={styles.cvTitle}>Engineering professional experience</h2>
                {EngineeringExperienceData.map((data, idx) =>
                    getExperienceBlock(`eed${idx}`, data))}

                <h2 className={styles.cvTitle}>Education</h2>
                {Education.map((data, idx) =>
                    <div key={`e${idx}`}>
                        <div className={styles.educationHeader}>
                            <div className={styles.cvCompanyMinor}>{data.company}</div>
                            <div className={styles.cvExperiencePeriodDiff}
                                 style={{fontSize: "1.3rem", fontWeight: "normal", paddingTop: "5px"}}>
                                {getDateDiffString([data.dateStart, data.dateEnd])}
                            </div>
                        </div>
                        <div className={styles.educationHeader}>
                            <div className={styles.cvDescription}>
                                {data.additional && <div>{data.additional}</div>}
                                <div>{data.qualification}</div>
                            </div>
                            <div className={styles.cvExperiencePeriod} style={{padding: "0px 0px 10px 0px"}}>
                                {data.dateStart} - {data.dateEnd}
                            </div>
                        </div>
                    </div>
                )}

                <h2 className={styles.cvTitle}>Certifications</h2>
                {Certifications.map((data, idx) =>
                    <div key={`cer${idx}`} className={styles.cvSummary}
                         style={{paddingTop: "5px", paddingBottom: "5px"}}>
                        <strong>{data.company}, </strong><span>{data.name}, </span><span>{data.date ?? `${data.dateEnd} - ${data.dateStart}`}</span>
                    </div>
                )}
            </Container>
        </Container>
    );
}

export default CV;