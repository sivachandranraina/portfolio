import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import './Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props);


        this.state = {
            instance: 'Model*',
            bio: ['Model*', 'Fullstack Developer', 'Designer', 'Photogenic', 'Casual writer', 'Wanderlust']
        };


        setTimeout(() => {
            this.renderBio();
        }, 2000);

    }

    renderBio() {
        this.setState({
            instance: this.state.bio[Math.floor(Math.random() * this.state.bio.length)]
        })
        setTimeout(() => {
            this.renderBio();
        }, 2000);
    }
    render () {
        return (
            <div className="banner">
                <div className="container">
                    <Row>
                        <Col xs={12} md={{size: '6'}}>
                            <h4>fashionaholic</h4>
                            <h1>Sivachandran Raina</h1>
                            <h4>a {this.state.instance}</h4>
                            <Button>Get Started</Button>
                            <Button>View Resume</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Banner;