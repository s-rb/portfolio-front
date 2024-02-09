import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Skidka4uBotImg from "../../Assets/Projects/Bot.png"
import EcommerceImg from "../../Assets/Projects/EcommerceShop.png"
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
import TaskListImg from "../../Assets/Projects/Tasklist_screen.png"
import NettyChatImg from "../../Assets/Projects/NettyChat.png"

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
                            imgPath={BlogImg}
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
                            demoLink={"http://blog.surkoff.com"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={EcommerceImg}
                            title="Ecommerce Full Stack Application"
                            description="Ecommerce Full Stack Springboot/Angular Application, integration with Payment processor via API"
                            technologies="The backend main language is Java 17 and the app is built using SpringBoot 2.
                            The frontend main language is TypeScript and its built using Angular"
                            backEnd={"https://github.com/s-rb/ecommerce-backend"}
                            frontEnd={"https://github.com/s-rb/ecommerce-frontend"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={JapanCafeImg}
                            title="Japan cafe"
                            description="React application for the Japan cafe website made for study ReactJS purpose"
                            technologies="Javascript language, ReactJS library. Html, CSS"
                            ghLink={"https://github.com/s-rb/japan-cafe"}
                            demoLink={"http://japan-cafe.surkoff.com"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={QuizImg}
                            title="Quiz"
                            description="Quiz is a simple frontend ReactJS application where you can answer some
                            questions. The application calculates right and wrong answers and after the quiz is finished,
                            it will show you the results.
                            This application acquires questions and answers from the open API of opentdb.com.
                            The application was created for educational purposes to study ReactJS"
                            technologies="The main language of the application is JavaScript. It uses the ReactJS library.
                            The project was bootstrapped with create-react-app"
                            demoLink="http://quiz.surkoff.com"
                            ghLink={"https://github.com/s-rb/react-quiz-app"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={Skidka4uBotImg}
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
                            ghLink={"https://github.com/s-rb/PriceWatcherBot"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={ChatGptTgBotImg}
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
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={PriceWatchFront}
                            title="Skidki4u Frontend"
                            description="React application for price-watching backend application. It is another client
                            for the backend. The first and primary is the telegram bot Skidka4uBot
                            (https://t.me/skidka_4u_bot). This application shows you notifications when the backend
                            has found any sales"
                            technologies="TypeScript, ReactJS library, Html, Css"
                            addButtonText="Disabled"
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={PortfolioImg}
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
                            title="Costs log"
                            description="React application for managing costs. You can add costs with dates and the application
                            calculates results and shows you the diagrams"
                            technologies="Javascript language, ReactJS library, Html, Css"
                            ghLink={"https://github.com/s-rb/react-costs-log-app"}
                            demoLink={"http://costs-log.surkoff.com/"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={InteractivePoster}
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
                            title="Catch the drop"
                            description="Java game Catch the drop. The application is built with Java and Swing.
                            It's created on GeekBrains intensive"
                            technologies="The app's main language is Java 11"
                            ghLink={"https://github.com/s-rb/simple-java-game-catch-the-drop"}
                        />
                    </Col>


                    <Col className="project-card">
                        <ProjectCard
                            imgPath={TaskListImg}
                            title="Task list"
                            description="Very basic React application to manage tasks. You can add tasks, they appear in the task list. You can remove them from the task list"
                            technologies="Javascript language, ReactJS library, Html, Css"
                            ghLink={"https://github.com/s-rb/styling-components-app"}
                            demoLink={"http://tasklist.surkoff.com/"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={NettyChatImg}
                            title="Netty chat"
                            description="Simple Netty Chat client and server app. You can run server and a lot of clients. They send messages to the server and server sends messages to all connected clients"
                            technologies="Java 17 FX, Netty framework, Log4j"
                            ghLink={"https://github.com/s-rb/SimpleNettyChat"}
                        />
                    </Col>

                    <Col className="project-card">
                        <ProjectCard
                            imgPath={AndroidAgarImg}
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
