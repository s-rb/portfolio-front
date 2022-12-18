import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        How Much I <strong className="blue">Code</strong>
      </h1>
      <GitHubCalendar
        username="s-rb"
        blockSize={15}
        blockMargin={5}
        color="#4169e1"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
