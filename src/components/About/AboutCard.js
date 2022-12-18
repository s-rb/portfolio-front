import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings. I am <span className="blue">Roman Surkov </span>
            <br />I am a <span className="blue">software engineer</span>.
            <br /><span className="blue">10.2021 - now </span> - I develop backend microservices as <span className="blue">senior java developer</span> in one of major banks
            <br /><span className="blue">07.2020 - 10.2021 </span> - I worked as <span className="blue">java developer</span> on projects: backend applications for social web site, sports web portal and application for transferring data between databases
            <br /><span className="blue">06.2020 - 09.2021 </span> - I worked as <span className="blue">programmer</span> for one international banking applications vendor
            <br /><span className="blue">2019 - 05.2020 </span> - I started to<span className="blue"> study</span> applications developing and I choose <span className="blue">java</span> as main language
            <br />In <span className="blue">2009 - 2019 </span> I was an engineer => a lead engineer => a chief engineer => a contractor
          {/*  <br /> I've participated in various Hackathons such as:*/}
          {/*  */}
          </p>
          {/*<ul>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> SISHACK (Stonehill International School)*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> NeevHacks (@ Neev Academy)*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> TISBHacks*/}
          {/*  </li>*/}
          {/*</ul>*/}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."{" "}
          </p>
          <footer className="blockquote-footer">Marie Curie</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
