import React, { Component } from "react";
import { Row, Col } from  "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faWordpress } from "@fortawesome/free-brands-svg-icons";

import './Footer.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            links: [{
                icon: faFacebookF,
                link: 'https://www.facebook.com/sivachandran.raina'
            }, {
                icon: faTwitter,
                link: 'https://www.twitter.com/iamSivachandran'
            }, {
                icon: faLinkedinIn,
                link: 'https://in.linkedin.com/in/sivachandran-raina-59538079'
            }, {
                icon: faInstagram,
                link: 'https://instagram.com/sivachandranraina'
            }, {
                icon: faWordpress,
                link: 'https://sivachandranraina.wordpress.com/'
            }]
        }
    }
    renderSocialLinks() {
        return this.state.links.map((data, index)=>{
            return (
                <a href={data.link} key={index} target="_blank" ><FontAwesomeIcon icon={data.icon} /></a>
            )
        })
    }
    render () {
        return (
            <div className="footer">
                <div className="container">
                    <Row>
                        <Col>
                            <h2>For more follow</h2>
                            <h4>
                                {this.renderSocialLinks()}
                            </h4>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Footer;