import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import _ from "lodash";

import './Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: ['Model*', 'Fullstack Developer', 'Designer', 'Photogenic', 'Casual writer', 'Wanderlust']
        };
    }

    renderBio() {
        return _.map(this.state.bio, (data, index)=> {
            return (
                <div className="bio-item" key={index}>
                    {data}
                </div>
            )
        })
    }
    render () {
        return (
            <div className="banner">
                <div className="container">
                    <Row>
                        <Col xs={12} md={{size: '6', offset: '6'}}>
                            <h4>fashionaholic</h4>
                            <h1>Sivachandran Raina</h1>
                            <div>{this.renderBio()}</div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Banner;