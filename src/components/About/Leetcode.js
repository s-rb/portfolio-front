import React from "react";
import { Row } from "react-bootstrap";
import ProgressCalend from "./ProgressCalend";

function Leetcode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="blue">Leetcode</strong>
      </h1>
      <ProgressCalend
        username="s_rb"
        blockSize={15}
        blockMargin={5}
        color="#4169e1"
        fontSize={16}
      />
    </Row>
  );
}

export default Leetcode;
