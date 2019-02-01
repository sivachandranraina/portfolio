import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CircularProgressbar from "react-circular-progressbar";

import scr1 from './../../assets/images/scr1.jpg';
import 'react-circular-progressbar/dist/styles.css';
import './About.css';

class About extends Component {

    render () {
        return (
            <div className="about">
                <div className="container">
                    <Row>
                        <Col xs={12} className="text-center text-uppercase">
                            <h2 className="title">About Me</h2>
                        </Col>
                        <Col xs={12}>
                            <Row className="image-block">
                                <Col xs={12} md={4} className="text-right">
                                    <img src={scr1} alt="SCR" />
                                </Col>
                                <Col xs={12} md={8} className="text-center">
                                    <blockquote className="blockquote">
                                        <p className="mb-0 text-uppercase">Life is What you do!</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Sivachandran</cite></footer>
                                    </blockquote>
                                    <p className="">
                                        A fashionaholic by creation!
                                        <br/>Fashion designer by passion!
                                        <br/>UI designer by profession!
                                    </p>
                                    <br/>
                                    <p>Passion grew early from my school days. Profession from my college days.</p>
                                    <p>
                                        Favourite number is 3. Love to work in CSS3.<br/>
                                        Black and white are my 2 favourite colors.A combination of 16 million colors.<br/>
                                        Only 1 motive.To think creative!To innovate the effective!
                                    </p>
                                    <p>
                                       One thing is clear "Whatever I do my mind thinks only about design".
                                    </p>
                                    <p>
                                        Wanna learn: Horse riding, Swimming, Hair styling, Guitar
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="skill-set">
                            <Row>
                                <Col>
                                    <CircularProgressbar
                                        percentage={90}
                                        strokeWidth={2}
                                    />
                                </Col>
                                <Col>
                                    <CircularProgressbar
                                        percentage={90}
                                        strokeWidth={2}
                                    />
                                </Col>
                                <Col>
                                    <CircularProgressbar
                                        percentage={90}
                                        strokeWidth={2}
                                    />
                                </Col>
                                <Col>
                                    <CircularProgressbar
                                        percentage={90}
                                        strokeWidth={2}
                                    />
                                </Col>
                                <Col>
                                    <CircularProgressbar
                                        percentage={90}
                                        strokeWidth={2}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default About;