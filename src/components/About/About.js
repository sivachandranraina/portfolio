import React, { useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";
import Tilt from "react-parallax-tilt";
import _ from "lodash";
import { Parallax } from "react-scroll-parallax";

import img from "./../../assets/images/scr.webp";
import leo from "./../../assets/images/leo.svg";
import azure from "./../../assets/images/skills/azure.svg";
import reactLogo from "./../../assets/images/skills/react.svg";
import angularLogo from "./../../assets/images/skills/angular.svg";
import pythonLogo from "./../../assets/images/skills/python.png";
import nodeLogo from "./../../assets/images/skills/node.svg";
import openaiLogo from "./../../assets/images/skills/openai.png";
import photoshopLogo from "./../../assets/images/skills/photoshop.svg";
import "./About.scss";

const skillSet = [
  {
    title: "Azure",
    percentage: 75,
    logo: azure
  },
  {
    title: "Python",
    percentage: 75,
    logo: pythonLogo
  },
  {
    title: "React",
    percentage: 75,
    logo: reactLogo
  },
  {
    title: "Prompt Engineering",
    percentage: 80,
    logo: openaiLogo
  },
  {
    title: "Angular",
    percentage: 60,
    logo: angularLogo
  },
  {
    title: "Node",
    percentage: 70,
    logo: nodeLogo
  },
  {
    title: "Photoshop",
    percentage: 90,
    logo: photoshopLogo
  },
];

const Skill = ({ title, logo }) => {
  const bgref = useRef(null),
    containerRef = useRef(null);

  const followImageCursor = (event, menuItem) => {
    const contentBox = menuItem.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    bgref.current.style.top = `${dy}px`;
    bgref.current.style.left = `${dx}px`;
  };
  useEffect(() => {
    containerRef.current.addEventListener("mousemove", (event) => {
      followImageCursor(event, containerRef.current);
    });
  }, []);
  return (
    <div ref={containerRef} className="skill">
      <h2 data-item-text={title}>{title}</h2>
      <div
        ref={bgref}
        className="logo-bg"
        style={{ backgroundImage: `url(${logo})` }}
      />
    </div>
  );
};

const renderSkillSet = () => {
  return _.map(skillSet, (data, index) => {
    return (
      <Parallax
        translateX={index % 2 !== 0 ? [-100, 100] : [100, -100]}
        key={index}
      >
        <Skill {...data} />
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

                  <div className="photo-frame">
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      tiltReverse={true}
                    ><img src={img} loading="lazy" alt="SCR" />
                    </Tilt>
                    <img src={leo} loading="lazy" alt="LEO" />
                  </div>
                </Parallax>
              </Col>

              <Col xs={12} lg={8} className="text-center">
                <Parallax translateX={[10, -10]}>
                  <div>
                    <blockquote className="blockquote">
                      <h1 className="mb-0">
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
                      Scriptist by profession!
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
                      about creative stuff".
                    </p>
                    <p>
                      And this COVID-19 lockdown made me as a Hairstylist, as
                      per my wishlist
                    </p>
                    <p>
                      Wishlist: Horse riding, Swimming <br />
                    </p>
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Col>



          <Col xs={12} className="skill-set d-md-block d-none">
            <div className="block">
              <h2>SKILLS</h2>
              <h2>SKILLS</h2>
            </div>
            <div>{renderSkillSet()}</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
