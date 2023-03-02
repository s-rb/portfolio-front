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
import PriceWatchFront from "../../Assets/Projects/PriceWatchFront.png"
import JapanCafeImg from "../../Assets/Projects/JapanCafe.png"
import PortfolioImg from "../../Assets/Projects/Portfolio.png"
import ChatGptTgBotImg from "../../Assets/Projects/ChatGptTgBot.png"

// todo Сделать всплывающее описание по нажатию или наведению
function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My recent <strong className="blue">Projects</strong>
                </h1>
                <p style={{color: "white"}}>
                    Here you can see some of my <strong className="blue">side</strong> projects
                </p>
                <Row lg={3} sm={1} md={2} xs={1} style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col className="project-card">
                        <ProjectCard
                            imgPath={Skidka4uBotImg}
                            isBlog={false}
                            title="Skidka4uBot"
                            description="Skidka4uBot is a web service and a telegram bot as its client that allows the
                            user to track real sales of popular online shops. Also, it allows the user to subscribe to
                            desired sale percentage, item category, or item keywords. It uses parsers to acquire
                            information about items: titles, categories, prices, etc. The service checks from time to
                            time if a price has been reduced enough and if it did, the bot will send you a notification"
                            technologies="The main language is Java 17. The app is built using SpringBoot 2. Parsing
                            was implemented by using Selenium and Firefox browser.
                            Main services are developed as separate microservices. They are connected through RabbitMQ
                            and packaged in docker containers. As a database it uses Postgresql"
                            demoLink="https://t.me/skidka_4u_bot"
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={QuizImg}
                            isBlog={false}
                            title="Quiz"
                            description="Quiz is a simple frontend ReactJS application where you can answer some
                            questions. The application calculates right and wrong answers and after the quiz is finished,
                            it will show you the results.
                            This application acquires questions and answers from the open API of opentdb.com.
                            The application was created for educational purposes to study ReactJS"
                            technologies="The main language of the application is JavaScript. It uses the ReactJS library.
                            The project was bootstrapped with create-react-app"
                            demoLink="http://quiz.surkoff.com"
                            ghLink={"https://bitbucket.org/surkovr/react-quiz-app/src/master/"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={JapanCafeImg}
                            isBlog={false}
                            title="Japan cafe"
                            description="React application for the Japan cafe website made for study ReactJS purpose"
                            technologies="Javascript language, ReactJS library. Html, CSS"
                            ghLink={"https://bitbucket.org/surkovr/japan-cafe/src/master/"}
                            demoLink={"http://japan-cafe.surkoff.com"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={ChatGptTgBotImg}
                            isBlog={false}
                            title="ChatGpt telegram bot"
                            description="A Telegram bot for sending requests to ChatGpt from OpenAI. Unlimited access
                            for the administrator. Ability for the administrator to approve access for third-party users.
                            Storing user information in a file and in RAM. Written partly with ChatGpt to test the
                            capabilities of modern OpenAI neural networks"
                            technologies="Application written in Java 17. Building and dependency control with Apache
                            Maven. The telegram bots library org.telegram.telegrambots was used to implement the
                            telegram bot, and com.theokanning.openai-gpt3-java for OpenAI integration. This is a
                            lightweight application with minimal technologies and dependencies"
                            ghLink={"https://github.com/s-rb/chatgpt-bot"}
                            demoLink="https://t.me/surkoff_chatgpt_bot"
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={BlogImg}
                            isBlog={false}
                            title="Blog backend application"
                            description="This is a backend application for a blog engine. You can register and confirm
                            your mail by email code, the registration form is protected by a captcha. You can do posts,
                            write comments, and like posts. It uses Spring framework and MySql database.
                            The code is covered with unit tests (Junit). This project was developed during the study
                            at the Skillbox course"
                            technologies="The main language is Java 11. The application was built with Apache Maven
                            on SpringFramework. MySql as database. JUnit for testing code, Cage for captcha generation,
                            and Jakarta Mail for emails"
                            ghLink={"https://github.com/s-rb/blog-engine"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={PriceWatchFront}
                            isBlog={false}
                            title="Skidki4u Frontend"
                            description="React application for price-watching backend application. It is another client
                            for the backend. The first and primary is the telegram bot Skidka4uBot
                            (https://t.me/skidka_4u_bot). This application shows you notifications when the backend
                            has found any sales"
                            technologies="TypeScript, ReactJS library, Html, Css"
                            demoLink={"http://skidki4u.surkoff.com"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={PortfolioImg}
                            isBlog={false}
                            title="Portfolio website"
                            description="This is my portfolio website. In fact, you are visiting it right now.
                            It is built with Javascript and ReactJs library"
                            technologies="Javascript, ReactJS library, Html, Css"
                            ghLink={"https://github.com/s-rb/portfolio-front"}
                            demoLink={"https://surkoff.com"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={CostsLogImg}
                            isBlog={false}
                            title="Costs log"
                            description="React application for managing costs. You can add costs with dates and the application
                            calculates results and shows you the diagrams"
                            technologies="Javascript language, ReactJS library, Html, Css"
                            ghLink={"https://bitbucket.org/surkovr/react-costs-log-app/src/master/"}
                            demoLink={"http://costs-log.surkoff.com/"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={InteractivePoster}
                            isBlog={false}
                            title="Interactive poster"
                            description="This is an interactive poster for Valentine's Day. It's built with Java and
                            LibGdx library. The application is created on GeekBrains intensive"
                            technologies="The app is built with Java 11 language and LibGdx library"
                            ghLink={"https://github.com/s-rb/interactive-java-poster"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={HashGen}
                            isBlog={false}
                            title="GUI HashGenerator desktop app"
                            description="This is a desktop application for the generation of hash codes for the
                            subdirectories depending on files, contained in those directories.
                            Algorithm: 1) Enter the root directory for which sub-dirs it will calculate the hashcode.
                            2) When you click Generate button, the application finds subdirectories and generates hash codes for
                            each directory. It works in multiple threads. 3) After it calculates the results, click the Export button.
                            The application writes results to a CSV file. 4) You can click the Open button to open the saved file with results"
                            technologies="The main language is Java 11 (Concurrent, Stream API, IO, NIO).
                            It uses JavaFX for the GUI"
                            ghLink={"https://github.com/s-rb/gui-hashcode-generator"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={CatchTheDrop}
                            isBlog={false}
                            title="Catch the drop"
                            description="Java game Catch the drop. The application is built with Java and Swing.
                            It's created on GeekBrains intensive"
                            technologies="The app's main language is Java 11"
                            ghLink={"https://github.com/s-rb/simple-java-game-catch-the-drop"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={AndroidAgarImg}
                            isBlog={false}
                            title="Android game like Agar.io"
                            description="Simple Android game like agar.io. It uses java and gradle"
                            technologies="Main language is Java 11. It is built with gradle"
                            ghLink={"https://github.com/s-rb/simple-android-java-game"}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
