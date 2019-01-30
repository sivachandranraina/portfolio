import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import scr1 from './../../assets/images/scr1.jpg';
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
                                <Col xs={12} md={8}>
                                    
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