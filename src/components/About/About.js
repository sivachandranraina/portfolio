import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'reactstrap';
import Tilt from 'react-parallax-tilt';
import _ from 'lodash';
import { Parallax } from 'react-scroll-parallax';

import img from './../../assets/images/scr.webp';
import reactLogo from './../../assets/images/skills/react.svg';
import angularLogo from './../../assets/images/skills/angular.svg';
import reduxLogo from './../../assets/images/skills/redux.svg';
import nodeLogo from './../../assets/images/skills/node.svg';
import bootstrapLogo from './../../assets/images/skills/bootstrap.svg';
import photoshopLogo from './../../assets/images/skills/photoshop.svg';
import './About.scss';

const skillSet = [
	{
		title: 'React',
		percentage: 75,
		logo: reactLogo,
		caption:
			'Elevate your user interface and simplify your front-end development with React.js - the flexible and efficient JavaScript library that empowers you to build dynamic and reusable UI components, while maintaining optimal performance and scalability.'
	},
	{
		title: 'Redux',
		percentage: 75,
		logo: reduxLogo,
		caption:
			'Streamline your state management and simplify your web development workflow with Redux - the powerful library that brings predictability, consistency, and scalability to your applications.'
	},
	{
		title: 'Angular',
		percentage: 60,
		logo: angularLogo,
		caption:
			'Take your web development skills to the next level with Angular - the comprehensive platform that empowers you to build dynamic, scalable, and feature-rich applications with ease.'
	},
	{
		title: 'Node',
		percentage: 70,
		logo: nodeLogo,
		caption:
			'Unlock the full potential of your web applications with Node.js - the powerful runtime environment that enables you to build fast, scalable, and real-time applications with ease, using JavaScript for both front-end and back-end development.'
	},
	{
		title: 'Bootstrap',
		percentage: 80,
		logo: bootstrapLogo,
		caption:
			'Bootstrap - the sleek, responsive, and intuitive framework that allows you to create stunning and functional websites and applications with minimal effort and maximum efficiency.'
	},
	{
		title: 'Photoshop',
		percentage: 90,
		logo: photoshopLogo,
		caption:
			'Unleash your creativity and bring your visual ideas to life with Photoshop - the industry-standard image editing software that provides you with a comprehensive set of tools and features to design, enhance, and manipulate images and graphics like a pro.'
	}
];

const Skill = ({ title, logo }) => {
	const bgref = useRef(null),
		containerRef = useRef(null);

	const followImageCursor = (event, menuItem) => {
		const contentBox = menuItem.getBoundingClientRect();
		const dx = event.clientX - contentBox.x;
		const dy = event.clientY - contentBox.y;
		bgref.current.style.top = `${dy}px`;
		bgref.current.style.left = `${dx}px`;
	};
	useEffect(() => {
		containerRef.current.addEventListener('mousemove', (event) => {
			followImageCursor(event, containerRef.current);
		});
	}, []);
	return (
		<div ref={containerRef} className="skill">
			<h2 data-item-text={title}>{title}</h2>
			<div ref={bgref} className="logo-bg" style={{ backgroundImage: `url(${logo})` }} />
		</div>
	);
};

const renderSkillSet = () => {
	return _.map(skillSet, (data, index) => {
		return (
			<Parallax translateX={index % 2 !== 0 ? [ -100, 100 ] : [ 100, -100 ]} key={index}>
				<Skill {...data} />
			</Parallax>
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
								<Parallax translateX={[ -10, 10 ]}>
									<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} tiltReverse={true}>
										<img src={img} loading="lazy" alt="SCR" />
									</Tilt>
								</Parallax>
							</Col>

							<Col xs={12} lg={8} className="text-center">
								<Parallax translateX={[ 10, -10 ]}>
									<div>
										<blockquote className="blockquote">
											<h1 className="mb-0 text-uppercase">Life is What you do!</h1>
											<footer className="blockquote-footer">
												<cite title="Source Title">Sivachandran</cite>
											</footer>
										</blockquote>
										<p className="caption">
											A fashionaholic by creation!
											<br />
											Fashion designer by passion!
											<br />
											JavaScriptist by profession!
										</p>
										<br />
										<p>Passion grew early from my school days. Profession from my college days.</p>
										<p>
											Favourite number is <span className="primary">3</span>.
											<br />
											Black and white are my <span className="primary">2</span> favourite colors,
											a combination of 16 million colors.
											<br />
											Only <span className="primary">1</span> motive. To think creative! To
											innovate the effective!
										</p>
										<p>One thing is clear "Whatever I do my mind thinks only about design".</p>
										<p>And this COVID-19 lockdown made me as a Hairstylist, as per my wishlist</p>
										<p>
											Wishlist: Horse riding, Swimming <br />
										</p>
									</div>
								</Parallax>
							</Col>
						</Row>
					</Col>

					<Col xs={12} className="skill-set d-md-block d-none">
						<div className="block">
							<h2>SKILLS</h2>
							<h2>SKILLS</h2>
						</div>
						<div>{renderSkillSet()}</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default About;
