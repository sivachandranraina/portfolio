import React from "react";
import { Row, Col } from "reactstrap";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faBriefcase,
  faStar,
  faForward,
  faCompass,
  faGlassCheers,
  faChild,
  faSignal,
  faUserTie,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import "./TimeLine.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Parallax } from "react-scroll-parallax";

const timelineData = [
  {
    icon: faChild,
    date: "1994-03-17",
    title: "First Release",
    description: "Cool Night was that.",
    content:
      "The day I felt air all over my body instead of water. A surreal joy of becoming one of the humans. A gift from God. My visit from the stork.",
  },
  {
    icon: faGoogle,
    date: "2013-08-01",
    title: "HUB",
    description: "Creative Head @ Google HUB for 1 year",
    content:
      "Google HUB - Google Students'Club connects people and creates awareness among our college students who require help or service in learning all and everything related to Google.",
  },
  {
    icon: faGraduationCap,
    date: "2015-04-01",
    title: "Graduation",
    description:
      "The day I felt both Day and Night at the same time @K.L.N. College of Engineering!",
    content:
      "Day: Happy about getting Degree 🤩 <br/> Night: Sad for parting away from my college and the Stars(Professors) who crafted my knowledge and gave it a shape!",
  },
  {
    icon: faBriefcase,
    date: "2015-06-01",
    title: "Career",
    description:
      "UI Developer @ InfoFaces, <small>The second Company which I got offer in Campus Recruitment.</small>",
    content:
      "Planning and Preparation is for first benchers...Absolutely! I was a back bencher.<br/><br/>The view on my profession, to choose UI was crystal clear and '<span class='primary'>Siva's adaptive attitude helped him to initiate his career journey in the right path and at the right time</span>' says, Principal Architect of InfoFaces",
  },
  {
    icon: faStar,
    date: "2016-01-01",
    title: "Award",
    description: "Star Performer @ InfoFaces",
    content:
      "I have garnered recognition in the organization for my smart work and proactive initiatives. My efforts have been appreciated, particularly for assisting and training fellow engineers.",
  },
  {
    icon: faForward,
    date: "2017-03-01",
    title: "Next Co",
    description: "<strong>Software Engineer</strong> @ Presidio",
    content:
      "I have gained a wealth of knowledge and experience as a junior engineer, which I successfully applied in my previous company. Now, in my new role at another firm, I aim to further enhance my adaptive skills and expand my knowledge base to foster personal and professional growth.<br/>",
  },
  {
    icon: faCompass,
    date: "2019-12-01",
    title: "Trip of Decade",
    description:
      "Road trip with Domibae | <strong>Work Smart - Save money - Travel Hardcore</strong>",
    content:
      'While many say "Rest in Peace," I have chosen a different approach by embracing a life of "Living in Peace." I firmly believe that everything unfolds with a purpose, and the reason behind this experience is to introduce me to the remarkable individual named Sivachandran. <a href="https://sivachandranraina.wordpress.com/2020/01/07/trip-of-decade/" target="_blank" rel="noopener noreferrer"">Read more</a>',
  },
  {
    icon: faSignal,
    date: "2020-07-01",
    title: "Promotion",
    description: "<strong>Senior Software Engineer</strong> @ Presidio",
    content:
      "A promotion is a significant career milestone, representing recognition for hard work and skills. Being part of this amazing firm feels like belonging to a supportive family. It offers a nurturing environment that fosters unity, collaboration, and personal growth. With shared values and a commitment to excellence, it provides opportunities for advancement, creating a sense of belonging and fulfillment.<br/>",
  },
  {
    icon: faGlassCheers,
    date: "2022-05-25",
    title: "Marriage",
    description: "Lifetime commitment",
    content:
      'Selecting a life partner may not require rocket science, but it does have the power to turn your world upside down from the very first encounter. While some believe love at first sight is mere infatuation, I view it as a deep-seated instinct. Trusting my instincts, I followed that path and happily married the <a href="https://www.instagram.com/dharsinijeyaprakash/" target="_blank" rel="noopener noreferrer"">woman</a> who captured my heart.',
  },
  {
    icon: faUserTie,
    date: "2023-07-01",
    title: "Step ahead",
    description: "<strong>Lead Engineer</strong> @ Presidio",
    content:
      "While it is often believed that staying in the same place may hinder growth, I have experienced the opposite. This organization has consistently provided me with abundant opportunities and timely promotions. It has become the ideal platform for my professional development, allowing me to flourish and advance at the right moments. Contrary to common perception, this place has proven to be a catalyst for my success, offering me a fulfilling and progressive journey.<br/>",
  },
  {
    icon: faUsers,
    date: "2023-08-09",
    title: "PenQueen",
    description: "<a href='https://www.instagram.com/athithra_sivachandran/' target='_blank'>Athithra Sivachandran</a>",
    content:
      "Amidst the quiet of midnight, an urgent message sent ripples through my world. My firstborn, my wife, was experiencing a rare and unexpected onset of labor, her water breaking. A rollercoaster ride of emotions ensued. With sleepless eyes, I embarked on a flight from Chennai to Madurai, an anxious journey into the unknown. Just before boarding, my father's voice brought joyful news - our baby girl had arrived at 5:19 AM.<br/><br/> The moment I held her, I knew she was special. Our penqueen, emerged from Queen",
  },
];

const TimeLine = () => {
  const renderAsHTML = (data) => {
    return {
      __html: data,
    };
  };

  return (
    <div className="timeline">
      <div className="text-uppercase position-sticky">
        <h2 className="title">Timeline</h2>
      </div>
      <div className="container">
        <Row>
          <Col xs={12}>
            <div style={{ width: "80%", margin: "0 auto" }}>
              {timelineData.map((data, index) => {
                return (
                  <AnimationOnScroll
                    offset={200}
                    duration={0.5}
                    animateIn={
                      index % 2 === 0
                        ? "animate__backInRight"
                        : "animate__backInLeft"
                    }
                    // animateOut={
                    //   index % 2 === 0
                    //     ? "animate__backOutRight"
                    //     : "animate__backOutLeft"
                    // }
                    key={index}
                  >
                    <div className={index % 2 === 0 ? 'content right' : 'content left'}>
                      <div className="media">
                        <Tilt
                          tiltReverse={true}
                          tiltMaxAngleX={10}
                          tiltMaxAngleY={10}
                        >
                          <div className="media-left d-md-block d-none">
                            <FontAwesomeIcon
                              icon={data.icon}
                              style={{ height: "inherit", width: "200px" }}
                            />
                          </div>
                        </Tilt>
                        <div className="media-body">
                          <Parallax translateX={[-10, 10]}>
                            <div>
                              <h1>{data.title}</h1>
                              <h1>{data.title}</h1>
                            </div>
                          </Parallax>
                          <h5>- {moment(data.date).format("MMMM, YYYY")}</h5>
                          <p
                            dangerouslySetInnerHTML={renderAsHTML(
                              data.description
                            )}
                          />
                          <p
                            dangerouslySetInnerHTML={renderAsHTML(data.content)}
                          />
                        </div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TimeLine;
