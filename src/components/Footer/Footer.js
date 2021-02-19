import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faWordpress } from '@fortawesome/free-brands-svg-icons';
import nameLogo from './../../assets/images/name-logo.png';

import './Footer.scss';

class Footer extends Component {
	constructor() {
		super();
		this.state = {
			links: [
				{
					icon: faFacebookF,
					link: 'https://www.facebook.com/sivachandran.raina'
				},
				{
					icon: faTwitter,
					link: 'https://www.twitter.com/iamSivachandran'
				},
				{
					icon: faLinkedinIn,
					link: 'https://in.linkedin.com/in/sivachandran-raina-59538079'
				},
				{
					icon: faInstagram,
					link: 'https://instagram.com/sivachandranraina'
				},
				{
					icon: faWordpress,
					link: 'https://sivachandranraina.wordpress.com/'
				},
				{
					icon: faCompactDisc,
					link: 'https://www.smule.com/iamscr'
				}
			]
		};
	}
	renderSocialLinks() {
		return this.state.links.map((data, index) => {
			return (
				<a href={data.link} key={index} target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={data.icon} />
				</a>
			);
		});
	}
	render() {
		return (
			<div className="footer">
				<div className="container">
					<Row>
						<Col>
							<h2>For more follow</h2>
							<h4>{this.renderSocialLinks()}</h4>
							<br />
							<div className="text-muted">
								#fullstackdeveloper #designer #casualwriter #photogenic<br />
								#wanderlust #breezysinger<br />
								#spreadlove<br />
								💖
							</div>
							<div>
								<img src={nameLogo} alt="name-logo" className="name-logo" />
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Footer;
