import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import bgVideo from './../../assets/videos/bg.mp4'

import "./Banner.scss";

const bio = [
  "Fullstack Developer", 500,
  "Designer", 500,
  "Photogenic", 500,
  "Casual writer", 500,
  "Wanderlust", 500,
  "Breezy singer", 500,
];

const Banner = () => {
  return (
    <div className="banner lazy">
      <div className="backdrop">
        <div className="container">
          <div className="img-over-text" data-item-text="SCR">SCR</div>
          <video autoPlay loop muted className="video-bg" src={bgVideo}></video>
          <Parallax translateY={["180vh", "-50vh"]} speed={"100"}>
            <Row noGutters>
              <Col xs={12}>
                <h4>fashionaholic</h4>
                <h1>Sivachandran Raina</h1>
                <h4>
                  a{" "}
                  <TypeAnimation
                    sequence={bio}
                    // {[
                    //   "Fitness tracker application",
                    //   1000,
                    //   "Catering vendor management",
                    //   1000,
                    //   "Employee asset management",
                    //   1000,
                    // ]}
                    speed={50}
                    // style={{ whiteSpace: "pre-line", fontSize: "2em" }}
                    repeat={Infinity}
                    cursor={false}
                  />
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
