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
} from "../../ExperienceData";
import styles from './Cv.module.css';
import {Summary} from "../../Summary";

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
                <div className={styles.cvPosition}>{data.position}</div>
                <div className={styles.cvExperiencePeriod}>{data.period}</div>
            </div>
            <div className={styles.cvExperienceHeader}>
                <div className={styles.cvCompany}>
                    {data.company !== null && typeof data.company === 'object' ? data.company.name : data.company}
                </div>
                <div className={styles.cvExperiencePeriodDiff}>{getDateDiffString(data.period.split(" - "))}</div>
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
                <div className={styles.cvSummary}>{Summary}</div>

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