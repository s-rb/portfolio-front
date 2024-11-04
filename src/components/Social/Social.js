import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import React from "react";
import cvStyle from "../CV/Cv.module.css";

export const Social = (props) => {
    let myCvLink = "/cv/Roman_Surkov_Cv.pdf";
    // // Проверяем, существует ли файл с загруженными данными
    try {
        const file = require("../../data/Roman_Surkov_CV_updated.pdf");
        console.log("File has found: " + file)
        myCvLink = "/cv/Roman_Surkov_CV_updated.pdf";
    } catch (error) {
        console.log("Using default local data");
    }

    const iconsClassName = `${props.iconsStyle ? cvStyle[props.iconsStyle] : "icon-colour home-social-icons"}`;

    return <>
        <ul className={props.className ?? "home-about-social-links"}>
            <li className="social-icons" key={'s0'}>
                <a
                    href="https://www.linkedin.com/in/roman-surkoff"
                    target="_blank"
                    rel="noreferrer"
                    className={iconsClassName}
                    key={'as0'}
                >
                    <FaLinkedinIn/>
                </a>
            </li>
            <li className="social-icons" key={'s1'}>
                <a
                    href="mailto:surkoff.com@google.com"
                    target="_blank"
                    rel="noreferrer"
                    className={iconsClassName}
                    key={'as1'}
                >
                    <FaEnvelope/>
                </a>
            </li>
            <li className="social-icons" key={'s2'}>
                <a
                    href="https://github.com/s-rb"
                    target="_blank"
                    rel="noreferrer"
                    className={iconsClassName}
                    key={'as2'}
                >
                    <AiFillGithub/>
                </a>
            </li>
            <li className="social-icons" key={'s22'}>
                <a
                    href="https://leetcode.com/surkoff/"
                    target="_blank"
                    rel="noreferrer"
                    className={iconsClassName}
                    key={'as22'}
                >
                    <SiLeetcode/>
                </a>
            </li>
            {props.iconsStyle && <li className="social-icons" key={'s4'}>
                <a
                    href={myCvLink}
                    download={"Roman_Surkov_CV.pdf"}
                    target="_blank"
                    className={iconsClassName}
                    key={'as42'}
                    style={{textDecoration: "none" }}
                >
                    CV
                </a>
            </li>}
        </ul>
    </>
}