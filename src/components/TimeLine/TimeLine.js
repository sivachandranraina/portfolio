import React from "react";
import { Row, Col } from "reactstrap";
import Tilt from "react-parallax-tilt";
import moment from "moment";

import newBorn from './../../assets/images/timeline/new-born.png'
import ghub from './../../assets/images/timeline/ghub.png'
import graduation from './../../assets/images/timeline/graduation.png'
import firstCompany from './../../assets/images/timeline/first-company.png'
import starPerformer from './../../assets/images/timeline/star-performer.png'
import nextCompany from './../../assets/images/timeline/next-company.png'
import promotion from './../../assets/images/timeline/promotion.jpeg'
import tripOfDecade from './../../assets/images/timeline/trip-of-decade.png'
import marriage from './../../assets/images/timeline/marriage.png'
import stepUp from './../../assets/images/timeline/step-up.png'
import penqueen from './../../assets/images/timeline/penqueen.png'
import spotAward from './../../assets/images/timeline/spot-award.jpeg'
import "./TimeLine.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Parallax } from "react-scroll-parallax";

const timelineData = [
  {
    icon: newBorn,
    date: "1994-03-17",
    title: "First Release",
    description: "Hello World!",
    content:
      "Imagine a world of pure water, then BAM! Fresh air hits your face. That's me, entering the human race in a glorious March. Talk about a surreal upgrade, like a divine download!",
  },
  {
    icon: ghub,
    date: "2013-08-01",
    title: "HUB",
    description: "Creative Head @ Google HUB for 1 year",
    content:
      "Google HUB - Google Students'Club connects people and creates awareness among our college students who require help or service in learning all and everything related to Google.",
  },
  {
    icon: graduation,
    date: "2015-04-01",
    title: "Graduation",
    description:
      "Tears, Cheers, and Engineering Degrees!",
    content:
      "Graduation day was a bittersweet symphony. Joyful cheers for the degree, but sniffles for leaving behind the awesome professors who were like guiding stars (pun intended!).",
  },
  {
    icon: firstCompany,
    date: "2015-06-01",
    title: "Career",
    description:
      "From Back Bencher to UI Rockstar",
    content:
      "Planning and Preparation is for first benchers...Absolutely! I was a back bencher.<br/><br/>The view on my profession, to choose UI was crystal clear and '<span class='primary'>Siva's adaptive attitude helped him to initiate his career journey in the right path and at the right time</span>' says, Principal Architect of InfoFaces",
  },
  {
    icon: starPerformer,
    date: "2016-01-01",
    title: "Award",
    description: "Shining Brighter Than a Star Performer Trophy!",
    content:
      "I have garnered recognition in the organization for my smart work and proactive initiatives. My efforts have been appreciated, particularly for assisting and training fellow engineers.",
  },
  {
    icon: nextCompany,
    date: "2017-03-01",
    title: "Next Co",
    description: "Level Up! New Company, New Adventures!",
    content:
      "I have gained a wealth of knowledge and experience as a junior engineer, which I successfully applied in my previous company. Now, in my new role at another firm, I aim to further enhance my adaptive skills and expand my knowledge base to foster personal and professional growth.<br/>",
  },
  {
    icon: tripOfDecade,
    date: "2019-12-01",
    title: "Trip of Decade",
    description:
      "Work, Save, Travel Like a Boss!",
    content:
      '"Rest in peace?" Nah, I choose "live in peace!" This trip with Domibae was epic, opening my eyes to amazing experiences and, of course, meeting the legendary Sivachandran (more on him later!). <a href="https://sivachandranraina.wordpress.com/2020/01/07/trip-of-decade/" target="_blank" rel="noopener noreferrer"">Read more</a>',
  },
  {
    icon: promotion,
    date: "2020-07-01",
    title: "Promotion",
    description: "Senior Software Engineer - The Climb Continues!",
    content:
      "A promotion is a significant career milestone, representing recognition for hard work and skills. Being part of this amazing firm feels like belonging to a supportive family. It offers a nurturing environment that fosters unity, collaboration, and personal growth. With shared values and a commitment to excellence, it provides opportunities for advancement, creating a sense of belonging and fulfillment.<br/>",
  },
  {
    icon: marriage,
    date: "2022-05-25",
    title: "Marriage",
    description: "Happily Ever After with My Soulmate!",
    content:
      'Selecting a life partner may not require rocket science, but it does have the power to turn your world upside down from the very first encounter. While some believe love at first sight is mere infatuation, I view it as a deep-seated instinct. Trusting my instincts, I followed that path and happily married the <a href="https://www.instagram.com/dharsinijeyaprakash/" target="_blank" rel="noopener noreferrer"">woman</a> who captured my heart.',
  },
  {
    icon: stepUp,
    date: "2023-07-01",
    title: "Step ahead",
    description: "Lead Engineer - Leading the Pack at Presidio!",
    content:
      "While it is often believed that staying in the same place may hinder growth, I have experienced the opposite. This organization has consistently provided me with abundant opportunities and timely promotions. It has become the ideal platform for my professional development, allowing me to flourish and advance at the right moments. Contrary to common perception, this place has proven to be a catalyst for my success, offering me a fulfilling and progressive journey.<br/>",
  },
  {
    icon: penqueen,
    date: "2023-08-09",
    title: "PenQueen",
    description: "<a href='https://www.instagram.com/athithra_sivachandran/' target='_blank'>Athithra Sivachandran</a>",
    content:
      "Amidst the quiet of midnight, an urgent message sent ripples through my world. My firstborn, my wife, was experiencing a rare and unexpected onset of labor, her water breaking. A rollercoaster ride of emotions ensued. With sleepless eyes, I embarked on a flight from Chennai to Madurai, an anxious journey into the unknown. Just before boarding, my father's voice brought joyful news - our baby girl had arrived at 5:19 AM.<br/><br/> The moment I held her, I knew she was special. Our penqueen, emerged from Queen",
  },
  {
    icon: spotAward,
    date: "2024-01-31",
    title: "Spot Award",
    description: "Triumph in Technology: A Spot Award Success Story",
    content:
      "Facing the challenge of mastering #python, #openai, and #redis, I embraced the unknown with determination. Guiding newcomers, I ensured their success, earning praise from peers and supervisors. My unwavering commitment to customer interests resulted in high-quality outcomes across every project stage. Employing a flexible and trust-driven approach, I delivered beyond expectations, earning a spot award for my exceptional contributions. This journey highlights the power of dedication, collaboration, and adaptability in achieving success.",
  }
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
        <div className="line"></div>
        <Row>
          <Col xs={12}>
            <div style={{ width: "80%", margin: "0 auto" }}>
              {timelineData.map((data, index) => {
                return (
                  <AnimationOnScroll
                    offset={300}
                    duration={0.5}
                    animateIn={
                      "animate__slideInRight"
                    }
                    animateOut={
                      "animate__slideOutLeft"
                    }
                    key={index}
                  >
                    <div className={'content right left'}>
                      <div className="media">
                        <Tilt
                          tiltReverse={true}
                          tiltMaxAngleX={10}
                          tiltMaxAngleY={10}
                        >
                          <div className="media-left d-md-block d-none">
                            <img
                              alt={data.title}
                              src={data.icon}
                              style={{ height: "inherit", width: "200px" }}
                            />
                          </div>
                        </Tilt>
                        <div className="media-body">
                          <Parallax translateX={[-5, 20]}>
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
