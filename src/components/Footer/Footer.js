import React, { Component } from "react";
import { Row, Col } from  "reactstrap";

import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <div className="container">
                    <Row>
                        <Col>
                            <h2>Sivachandran Raina</h2>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Footer;