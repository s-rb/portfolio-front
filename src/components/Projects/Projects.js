import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Skidka4uBotImg from "../../Assets/Projects/Bot.png"
import QuizImg from "../../Assets/Projects/Quiz.png"
import HashGen from "../../Assets/Projects/HashGenerator.png"
import BlogImg from "../../Assets/Projects/BlogFrontEnd.png"
import AndroidAgarImg from "../../Assets/Projects/AndroidAgar.png"
import CatchTheDrop from "../../Assets/Projects/JavaGameCatch.png"
import InteractivePoster from "../../Assets/Projects/InteractivePoster.png"
import CostsLogImg from "../../Assets/Projects/CostsLog.png"

// todo add projects Сделать всплывающее описание по нажатию или наведению
function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My recent <strong className="blue">Projects</strong>
                </h1>
                <p style={{color: "white"}}>
                    Here you can see some of my side projects
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Skidka4uBotImg}
                            isBlog={false}
                            title="Skidka4uBot"
                            description="Skidka4uBot is a web service and a telegram bot as it's client that allows the user
              to track real sales of popular online shops. Also it allows the user to subscribe on desired sale percentage,
              item category or item key words. It uses parsers to acquire information about items: titles, categories, prices etc.
              The service checks from time to time if a price has reduced enough and if it did, the bot will send you a notification"
                            technologies="Main language is Java 17. App is build using SpringBoot 2. Parsing implemented by using Selenium and Firefox browser.
              Main services developed as separate microservices. They are connected through RabbitMQ and packaged in docker containers.
              As database it uses Postgresql"
                            demoLink="https://t.me/skidka_4u_bot"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={QuizImg}
                            isBlog={false}
                            title="Quiz"
                            description="Quiz is a simple frontend ReactJS application where you can answer some questions. The application
              calculates right and wrong answers and after the quiz is finished, it will show you results.
              This application acquires questions and answers from the open API of opentdb.com.
              The application was created for educational purposes to study ReactJS"
                            technologies="Main language of the application is JavaScript. It uses ReactJS library.
              The project was bootstrapped with create-react-app"
                            demoLink="http://quiz.surkoff.com"
                            ghLink={"https://bitbucket.org/surkovr/react-quiz-app/src/master/"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={BlogImg}
                            isBlog={false}
                            title="Blog backend application"
                            description="This is a backend application for a blog engine. You can register and confirm your mail by
              email code, registration form is protected by captcha. You can do posts, like posts.
              It uses Spring framework and MySql database. The code is covered with unit tests (Junit).
              This project was developed during the study at the Skillbox course"
                            technologies="Main language is Java 11. The application built with Apache Maven on SpringFramework.
              MySql as database. JUnit for testing code, Cage for captcha generation and Jakarta Mail for emails"
                            ghLink={"https://github.com/s-rb/blog-engine"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={JapanCafeImg}
                            isBlog={false}
                            title="Japan cafe"
                            description="React application for the Japan cafe web site made for study ReactJS purpose"
                            technologies="Javascript language, ReactJS library. Html, Css"
                            ghLink={"https://bitbucket.org/surkovr/japan-cafe/src/master/"}
                            demoLink={"http://japan-cafe.surkoff.com"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={CostsLogImg}
                            isBlog={false}
                            title="Costs log"
                            description="React application for managing costs. You can add costs with dates and the application
                            calculates results and shows you the diagrams"
                            technologies="Javascript language, ReactJS library. Html, Css"
                            ghLink={"https://bitbucket.org/surkovr/react-costs-log-app/src/master/"}
                            demoLink={"http://costs-log.surkoff.com/"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={HashGen}
                            isBlog={false}
                            title="GUI HashGenerator desktop app"
                            description="This is a desktop application for generation hash-codes for the subdirectories depending on
              files, containing in those directories.
              Algorithm: 1) Enter the root directory for which sub-dirs it will calculate hashcode.
              2) When you click Generate button, the application finds subdirectories and generates hashcodes for
              each directory. It works in multiple threads. 3) After it calculates results, click Export button.
              The application writes results to CSV-file. 4) You can click Open button to open saved file with results"
                            technologies="Main language is Java 11 (Concurrent, Stream API, IO, NIO, It uses JavaFX for the GUI"
                            ghLink={"https://github.com/s-rb/gui-hashcode-generator"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={AndroidAgarImg}
                            isBlog={false}
                            title="Android game like Agar.io"
                            description="Simple Android game like agar.io. It uses java and gradle"
                            technologies="Main language is Java 11. It is built with gradle"
                            ghLink={"https://github.com/s-rb/simple-android-java-game"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={CatchTheDrop}
                            isBlog={false}
                            title="Catch the drop"
                            description="Java game Catch the drop. The application built with Java and Swing. It's created on GeekBrains intensive"
                            technologies="Uses language is Java 11"
                            ghLink={"https://github.com/s-rb/simple-java-game-catch-the-drop"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={InteractivePoster}
                            isBlog={false}
                            title="Interactive poster"
                            description="This is an interactive poster for the Valentine's Day. It's built with Java and LibGdx library. The application is created on GeekBrains intensive"
                            technologies="Uses language is Java 11. Additional library LibGdx"
                            ghLink={"https://github.com/s-rb/interactive-java-poster"}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
