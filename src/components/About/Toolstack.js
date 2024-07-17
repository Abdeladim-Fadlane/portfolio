import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNginx,
  SiLinux,
  SiGnometerminal,
  SiDocker,
  SiLinkedin,
  SiVirtualbox,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { FaDharmachakra } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
      <Col xs={2} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiGnometerminal />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiLinkedin />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <FaDharmachakra />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiVirtualbox />  
      </Col>
    </Row>
  );
}

export default Toolstack;
