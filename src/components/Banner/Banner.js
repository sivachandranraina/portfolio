import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Parallax } from "react-scroll-parallax";
import { TextLoop } from "react-text-loop-next";

import "./Banner.scss";

const bio = [
  "Fullstack Developer",
  "Designer",
  "Photogenic",
  "Casual writer",
  "Wanderlust",
  "Breezy singer",
];

const Banner = () => {
  return (
    <div className="banner lazy">
      <div className="backdrop">
        <div className="container">
          <Parallax translateY={["180vh", "-50vh"]} speed={"100"}>
            <Row noGutters>
              <Col xs={12}>
                <h4>fashionaholic</h4>
                <h1>Sivachandran Raina</h1>
                <h4>
                  a{" "}
                  <TextLoop mask={true} interval={1000}>
                    {bio.map((data, index) => (
                      <span key={index}>{data}</span>
                    ))}
                  </TextLoop>
                </h4>
                <Button
                  onClick={() => {
                    window.scroll({
                      top: "500",
                      behavior: "smooth",
                    });
                  }}
                >
                  Get Started
                </Button>
                <a
                  href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>View Resume</Button>
                </a>
              </Col>
            </Row>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Banner;
