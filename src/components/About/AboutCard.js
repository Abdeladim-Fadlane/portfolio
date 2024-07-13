import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Fadlane Abdeladim </span>
            , currently i completed my studies in software engineering at  
            <b className="purple"> 42 Network </b>
            .
            <br />
            I am a passionate software developer with over Two years of experience specializing in 
            <b className="purple"> software engineering & web development </b>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Born to be Root !"{" "}
          </p>
          <footer className="blockquote-footer">afadlane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
