import React, { useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";
import Tilt from "react-parallax-tilt";
import _ from "lodash";
import { Parallax } from "react-scroll-parallax";

import leo from "./../../assets/images/leo.svg";
import azure from "./../../assets/images/skills/azure.svg";
import reactLogo from "./../../assets/images/skills/react.svg";
import angularLogo from "./../../assets/images/skills/angular.svg";
import pythonLogo from "./../../assets/images/skills/python.png";
import nodeLogo from "./../../assets/images/skills/node.svg";
import openaiLogo from "./../../assets/images/skills/openai.png";
import photoshopLogo from "./../../assets/images/skills/photoshop.svg";
import aiCerti from "./../../assets/images/certificate/microsoft-certified-associate-badge.svg";
import fundaCerti from "./../../assets/images/certificate/microsoft-certified-fundamentals-badge.svg";
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
                <div style={{ position: 'sticky', top: '200px' }}>
                  <div className="photo-frame">
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      tiltReverse={true}
                    >
                      <div className="dp">
                      </div>
                    </Tilt>
                    <img src={leo} loading="lazy" alt="LEO" />
                  </div>
                </div>
              </Col>

              <Col xs={12} lg={8} className="text-center">
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
                      The seeds of passion were planted early in my school days, and by college, they'd blossomed into a full-fledged career. Don't ask me which one – that's a secret for now! But here's what fuels my fire
                    </p>
                    <p>
                      <ul>
                        <li>
                          <div className="primary">The number 3</div> It's just plain lucky! Maybe it signifies the perfect blend of passion, profession, and a dash of creativity?
                        </li>
                        <li>
                          <div className="primary">Black and white</div> These opposites attract in my world. They represent the simplicity that sparks endless creative possibilities, like turning 16 million colors into a masterpiece.
                        </li>
                        <li>
                          <div className="primary">One driving force</div> To think outside the box and make the good even better! Every project, every idea gets the creative treatment.</li>
                        <li>
                          <div className="primary">My mantra</div> My mind is a constant brainstorm, overflowing with fresh ideas.</li>
                      </ul>
                    </p>
                    <p>Speaking of fresh ideas, thanks to that unexpected COVID lockdown, I discovered a hidden talent – hairstyling! It was always on my wishlist, right alongside horse riding and swimming (still on the to-do list!). So, I grabbed my scissors and became a lockdown hairstylist extraordinaire.</p>
                  </div>
              </Col>
            </Row>
          </Col>



          <Col xs={12} className="skill-set d-md-block d-none">
            <div className="block">
              <h2>SKILLS</h2>
              <h2>SKILLS</h2>
            </div>
            <div className="logo-group">
              <div className="logo">
                <img src={aiCerti} alt="AI Certificate"></img>
                <div className="caption">Azure AI Engineer Associate</div>
              </div>
              <div className="logo">
                <img src={fundaCerti} alt="Fundamentals Certificate"></img>
                <div className="caption">Azure Fundamentals</div>
              </div>
            </div>
            <div>{renderSkillSet()}</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
