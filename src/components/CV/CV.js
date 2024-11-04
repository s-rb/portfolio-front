import React from "react";
import {differenceInCalendarMonths} from "date-fns";
import {Container} from "react-bootstrap";
import Particle from "../Particle";
import {Social} from "../Social/Social";
import { experienceData as defaultExpData } from "../../data/experienceData";
import styles from './Cv.module.css';
import {Summary} from "../../Summary";

function CV() {
    let experienceData  = defaultExpData; // Данные по умолчанию

    // // Проверяем, существует ли файл с загруженными данными
    try {
        experienceData = require("../../data/fetchedWorkExperience.json");
    } catch (error) {
        console.log("Using default local data");
    }

    function getDateDiffString(first, second) {
        // Определяем текущую дату как объект
        const now = new Date();

        // Функция для парсинга даты или возврата текущей даты
        function parseDate(dateStr) {
            if (dateStr === 'now' || dateStr === null) return now;
            const [month, year] = dateStr.split(".").map(Number);
            return new Date(year, month - 1);  // month - 1, так как месяцы начинаются с 0
        }
        const date1 = parseDate(first);
        const date2 = parseDate(second);

        // Вычисление разницы в месяцах
        let diff = differenceInCalendarMonths(date1 > date2 ? date1 : date2, date1 > date2 ? date2 : date1);

        // Форматируем результат в годы и месяцы
        const years = Math.floor(diff / 12);
        const months = diff % 12;

        if (years === 0) return `${months}m`;
        if (months === 0) return `${years}y`;
        return `${years}y ${months}m`;
    }

    function getExperienceBlock(idx, data, companies) {
        return <div key={idx}>
            <div className={styles.cvExperienceHeader}>
                <div className={styles.cvPosition}>{data.position}</div>
                <div className={styles.cvExperiencePeriod}>{data.period.started} - {data.period.finished ? data.period.finished : 'now'}</div>
            </div>
            <div className={styles.cvExperienceHeader}>
                <div className={styles.cvCompany}>
                    {data.company !== null && companies[data.company]?.name ? companies[data.company].name : data.company}
                </div>
                <div className={styles.cvExperiencePeriodDiff}>{getDateDiffString(data.period.started, data.period.finished)}</div>
            </div>
            {data.description.map((o, idx) => <p className={styles.cvDescription} key={`p${idx}`}>{o}</p>)}
        </div>;
    }

    return (
        <Container fluid className="project-section" key={'p1230'}>
            <Particle key={'p1233'}/>
            <Container key={'p1234'}>
                <h1 className="project-heading">ROMAN <span className="main-color">SURKOV</span></h1>
                <Social className={styles.contacts} iconsStyle={'cvContactsIcons'}/>
                <h1 className={styles.position}>Software engineer</h1>
                <div className={styles.cvSummary}><Summary description={experienceData?.description}/></div>

                <h2 className={styles.cvTitle}>Core Competencies</h2>
                <ul className={styles.cvCompetencies}>
                    {experienceData["core-competencies"].map((o, idx) => <li key={`ccn_${o}_${idx}`}>{o.replaceAll("&nbsp;", " ")}</li>)}
                </ul>

                <h2 className={styles.cvTitle}>Professional experience</h2>
                {experienceData.experience.map((data, idx) =>
                    getExperienceBlock(`ed_${data.position}_${idx}`, data, experienceData.companies))}

                <h2 className={styles.cvTitle}>Engineering professional experience</h2>
                {experienceData.engineering_experience.map((data, idx) =>
                    getExperienceBlock(`eed_${data.position}_${idx}`, data, experienceData.companies))}

                <h2 className={styles.cvTitle}>Education</h2>\
                {experienceData.education.map((data, idx) =>
                    <div key={`e_${data.date_start}_${data.date_end}_${idx}`}>
                        <div className={styles.educationHeader}>
                            <div className={styles.cvCompanyMinor}>{data.company}</div>
                            <div className={styles.cvExperiencePeriodDiff}
                                 style={{fontSize: "1.3rem", fontWeight: "normal", paddingTop: "5px"}}>
                                {data.period}
                            </div>
                        </div>
                        <div className={styles.educationHeader}>
                            <div className={styles.cvDescription}>
                                {data.additional && <div>{data.additional}</div>}
                                <div>{data.qualification}</div>
                            </div>
                            <div className={styles.cvExperiencePeriod} style={{padding: "0px 0px 10px 0px"}}>
                                {data.date_start} - {data.date_end}
                            </div>
                        </div>
                    </div>
                )}

                <h2 className={styles.cvTitle}>Certifications</h2>
                {experienceData.certifications.map((data, idx) =>
                    <div key={`cer_${data.name.trim()}_${idx}`} className={styles.cvSummary}
                         style={{paddingTop: "5px", paddingBottom: "5px"}}>
                        <strong>{data.company}, </strong><span>{data.name}, </span><span>{data.date ?? `${data.dateEnd} - ${data.dateStart}`}</span>
                    </div>
                )}
            </Container>
        </Container>
    );
}

export default CV;