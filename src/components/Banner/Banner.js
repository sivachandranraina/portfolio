import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

import './Banner.scss';

class Banner extends Component {
	constructor(props) {
		super(props);

		this.state = {
			instance: '',
			bio: [ 'Fullstack Developer', 'Designer', 'Photogenic', 'Casual writer', 'Wanderlust', 'Breezy singer' ]
		};

		setTimeout(() => {
			this.renderBio();
		}, 100);
	}

	renderBio() {
		this.setState({
			instance: this.state.bio[Math.floor(Math.random() * this.state.bio.length)]
		});
		setTimeout(() => {
			this.renderBio();
		}, 500);
	}
	render() {
		return (
			<div className="banner lazy">
				<div className="backdrop">
					<div className="container">
						<Row>
							<Col xs={12}>
								<h4>fashionaholic</h4>
								<h1>Sivachandran Raina</h1>
								<h4>a {this.state.instance}</h4>
								<Button
									onClick={() => {
										window.scroll({
											top: '500',
											behavior: 'smooth'
										});
									}}
								>
									Get Started
								</Button>
								<a
									href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button>View Resume</Button>
								</a>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
