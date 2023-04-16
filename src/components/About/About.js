import React from 'react';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import LiquidFillGauge from 'react-liquid-gauge';
import { Parallax } from 'react-scroll-parallax';

import img from './../../assets/images/scr.webp';
import 'react-circular-progressbar/dist/styles.css';
import './About.scss';

const skillSet = [
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
];

const renderSkillSet = () => {
	return _.map(skillSet, (data, index) => {
		return (
			<Col className="block" key={index}>
				<div className="name">{data.title}</div>
				<div className="circle">
					<LiquidFillGauge
						width={150}
						height={150}
						riseAnimation
						waveAnimation
						waveFrequency={3}
						waveAmplitude={2}
						value={data.percentage}
						waveStyle={{ fill: 'rgb(255,255,255)' }}
						circleStyle={{ fill: 'rgb(255,255,255)' }}
						textRenderer={(props) => null}
					/>
				</div>
			</Col>
		);
	});
};

const About = () => {
	return (
		<div className="about">
			<div className="text-uppercase position-sticky">
				<h2 className="title">About Me</h2>
			</div>
			<div className="container">
				<Row>
					<Col xs={12} className="mt-4">
						<Row className="image-block">
							<Col xs={12} lg={4} className="text-center">
								<Parallax translateX={[ '-50vw', '50vw' ]}>
									<img src={img} loading="lazy" alt="SCR" />
								</Parallax>
							</Col>

							<Col xs={12} lg={8} className="text-center">
								<Parallax translateY={[ '100vh', '-160vh' ]}>
									<div>
										<blockquote className="blockquote">
											<h1 className="mb-0 text-uppercase">Life is What you do!</h1>
											<footer className="blockquote-footer">
												<cite title="Source Title">Sivachandran</cite>
											</footer>
										</blockquote>
										<p className="caption">
											A fashionaholic by creation!
											<br />Fashion designer by passion!
											<br />JavaScriptist by profession!
										</p>
										<br />
										<p>Passion grew early from my school days. Profession from my college days.</p>
										<p>
											Favourite number is <span className="primary">3</span>.<br />
											Black and white are my <span className="primary">2</span> favourite colors,
											a combination of 16 million colors.<br />
											Only <span className="primary">1</span> motive. To think creative! To
											innovate the effective!
										</p>
										<p>One thing is clear "Whatever I do my mind thinks only about design".</p>
										<p>And this COVID-19 lockdown made me as a Hairstylist, as per my wishlist</p>
										<p>
											Wishlist: Guitarist*, Horse riding, Swimming <br />
											<small className="float-right">* - Inprogress</small>
										</p>
									</div>
								</Parallax>
							</Col>
						</Row>
					</Col>

					<Col xs={12} className="skill-set mt-5">
						<Row>{renderSkillSet()}</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default About;
