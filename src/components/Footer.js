import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by afadlane</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">

          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Abdeladim-Fadlane"

                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/abdeladim-fadlane/"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:abdofadlane128@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/afadlane/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
