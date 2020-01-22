import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import CircularProgressbar from 'react-circular-progressbar';

import scr1 from './../../assets/images/scr1.jpg';
import 'react-circular-progressbar/dist/styles.css';
import './About.css';

class About extends Component {
	constructor() {
		super();
		this.state = {
			skillSet: [
				{
					title: 'Photoshop',
					percentage: 90
				},
				{
					title: 'React',
					percentage: 75
				},
				{
					title: 'Bootstrap',
					percentage: 80
				},
				{
					title: 'Node',
					percentage: 70
				},
				{
					title: 'UX',
					percentage: 60
				}
			]
		};
	}
	renderSkillSet() {
		return _.map(this.state.skillSet, (data, index) => {
			return (
				<Col className="block" key={index}>
					<div className="name">{data.title}</div>
					<div className="circle">
						<CircularProgressbar
							percentage={data.percentage}
							strokeWidth={1}
							styles={{
								path: {
									stroke: '#FFF'
								},
								trail: {
									stroke: '#333'
								}
							}}
						/>
					</div>
				</Col>
			);
		});
	}

	render() {
		return (
			<div className="about">
				<div className="container">
					<Row>
						<Col xs={12} className="text-center text-uppercase position-sticky">
							<h2 className="title">About Me</h2>
						</Col>
						<Col xs={12} className="mt-4">
							<Row className="image-block">
								<Col xs={12} lg={4} className="text-center">
									<img src={scr1} loading="lazy" alt="SCR" />
								</Col>
								<Col xs={12} lg={8} className="text-center">
									<blockquote className="blockquote">
										<p className="mb-0 text-uppercase">Life is What you do!</p>
										<footer className="blockquote-footer">
											<cite title="Source Title">Sivachandran</cite>
										</footer>
									</blockquote>
									<p className="caption">
										A fashionaholic by creation!
										<br />Fashion designer by passion!
										<br />UI designer by profession!
									</p>
									<br />
									<p>Passion grew early from my school days. Profession from my college days.</p>
									<p>
										Favourite number is <span className="primary">3</span>. Love to work in CSS3.<br />
										Black and white are my <span className="primary">2</span> favourite colors. A
										combination of 16 million colors.<br />
										Only <span className="primary">1</span> motive. To think creative! To innovate
										the effective!
									</p>
									<p>One thing is clear "Whatever I do my mind thinks only about design".</p>
									<p>Wanna learn: Horse riding, Swimming, Hair styling, Guitar</p>
								</Col>
							</Row>
						</Col>
						<Col xs={12} className="skill-set">
							<Row>{this.renderSkillSet()}</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default About;
