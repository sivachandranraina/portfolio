import React from "react";
import { Row, Col } from "reactstrap";
import _ from "lodash";
import { Parallax } from "react-scroll-parallax";

import img from "./../../assets/images/scr.webp";
import "react-circular-progressbar/dist/styles.css";
import "./About.scss";

const skillSet = [
  {
    title: "React",
    percentage: 75,
  },
  {
    title: "Node",
    percentage: 70,
  },
  {
    title: "Bootstrap",
    percentage: 80,
  },
  {
    title: "Photoshop",
    percentage: 90,
  },
  {
    title: "UX",
    percentage: 60,
  },
];

const renderSkillSet = () => {
  return _.map(skillSet, (data, index) => {
    return (
      <Parallax translateX={index % 2 !== 0 ? [-100, 100] : [100, -100]}>
        <div className="skill" key={index}>
          <h2>{data.title}</h2>
        </div>
      </Parallax>
    );
  });
};

const About = () => {
  return (
    <div className="about">
      <div className="text-uppercase position-sticky">
        <h2 className="title">About Me</h2>
      </div>
      <div className="container">
        <Row>
          <Col xs={12} className="mt-4">
            <Row className="image-block">
              <Col xs={12} lg={4} className="text-center">
                <Parallax translateX={[-10, 10]}>
                  <img src={img} loading="lazy" alt="SCR" />
                </Parallax>
              </Col>

              <Col xs={12} lg={8} className="text-center">
                <Parallax translateX={[10, -10]}>
                  <div>
                    <blockquote className="blockquote">
                      <h1 className="mb-0 text-uppercase">
                        Life is What you do!
                      </h1>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Sivachandran</cite>
                      </footer>
                    </blockquote>
                    <p className="caption">
                      A fashionaholic by creation!
                      <br />
                      Fashion designer by passion!
                      <br />
                      JavaScriptist by profession!
                    </p>
                    <br />
                    <p>
                      Passion grew early from my school days. Profession from my
                      college days.
                    </p>
                    <p>
                      Favourite number is <span className="primary">3</span>.
                      <br />
                      Black and white are my <span className="primary">
                        2
                      </span>{" "}
                      favourite colors, a combination of 16 million colors.
                      <br />
                      Only <span className="primary">1</span> motive. To think
                      creative! To innovate the effective!
                    </p>
                    <p>
                      One thing is clear "Whatever I do my mind thinks only
                      about design".
                    </p>
                    <p>
                      And this COVID-19 lockdown made me as a Hairstylist, as
                      per my wishlist
                    </p>
                    <p>
                      Wishlist: Guitarist*, Horse riding, Swimming <br />
                      <small className="float-right">* - Inprogress</small>
                    </p>
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Col>

          <Col xs={12} className="skill-set">
            <div className="block">
              <h2>SKILLS</h2>
              <h2>SKILLS</h2>
            </div>
            {renderSkillSet()}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
