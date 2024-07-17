import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Ft_transcendence"
              description="The Pong Contest Website project is dedicated to creating a robust online platform where users can engage in real-time multiplayer games of Pong ."
              ghLink="https://github.com/Abdeladim-Fadlane/Backend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Webserver"
              description="Webserver empowers you to delve into the core of Http protocol, unraveling its intricacies and gaining practical insights by building your own HTTP server."
              ghLink="https://github.com/Abdeladim-Fadlane/webserv"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Inception"
              description="This project aims to broaden your knowledge of system administration by using Docker. You will virtualize several Docker images, creating them in your personal virtual machine."
              ghLink="https://github.com/Abdeladim-Fadlane/Inception"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
