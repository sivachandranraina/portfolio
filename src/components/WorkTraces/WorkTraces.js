import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import ifslogo from "./../../assets/images/infofaces.png";
import cmslogo from "./../../assets/images/commutatus.png";
import presidio from "./../../assets/images/presidio-logo.svg";
import "./WorkTraces.scss";

class WorkTraces extends Component {
  render() {
    return (
      <div className="work-traces">
        <div className="text-uppercase position-sticky">
          <h2 className="title">Work Traces</h2>
        </div>
        <div className="container">
          <Row>
            <Col xs={12} className="mt-4">
              <Row>
                <Col xs={12} md={4} className="company-logo">
                  <img src={ifslogo} alt="logo" />
                </Col>
                <Col xs={12} md={4} className="company-logo">
                  <img src={cmslogo} alt="logo" />
                </Col>
                <Col xs={12} md={4} className="company-logo">
                  <img src={presidio} alt="logo" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default WorkTraces;
