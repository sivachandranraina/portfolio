import React from 'react';
import { Row, Col } from 'reactstrap';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
	faBaby,
	faGraduationCap,
	faBriefcase,
	faStar,
	faForward,
	faCompass,
	faGlassCheers,
	faIdBadge
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import './TimeLine.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Parallax } from 'react-scroll-parallax';

const timelineData = [
	{
		icon: faBaby,
		date: '1994-03-17',
		title: 'First Release',
		description: 'Cool Night was that.',
		content:
			'The day I felt air all over my body instead of water. A surreal joy of becoming one of the humans. A gift from God. My visit from the stork.'
	},
	{
		icon: faGoogle,
		date: '2013-08-01',
		title: 'HUB',
		description: 'Creative Head @ Google HUB for 1 year',
		content:
			"Google HUB - Google Students'Club connects people and creates awareness among our college students who require help or service in learning all and everything related to Google."
	},
	{
		icon: faGraduationCap,
		date: '2015-04-01',
		title: 'Graduation',
		description: 'The day I felt both Day and Night at the same time @K.L.N. College of Engineering!',
		content:
			'Day: Happy about getting Degree 🤩 <br/> Night: Sad for parting away from my college and the Stars(Professors) who crafted my knowledge and gave it a shape!'
	},
	{
		icon: faBriefcase,
		date: '2015-06-01',
		title: 'Career',
		description:
			'UI Developer @ InfoFaces, <small>The second Company which I got offer in Campus Recruitment.</small>',
		content:
			"Planning and Preparation is for first benchers...Absolutely! I was a back bencher.<br/><br/>The view on my profession, to choose UI was crystal clear and '<span class='primary'>Siva's adaptive attitude helped him to initiate his career journey in the right path and at the right time</span>' says, Principal Architect of InfoFaces"
	},
	{
		icon: faStar,
		date: '2016-01-01',
		title: 'Award',
		description: 'Star Performer @ InfoFaces',
		content:
			'For the smart work and new initiation in organization.<br/><br/> Got Appreciation too for making good engineers as <strong>Trainer</strong>'
	},
	{
		icon: faForward,
		date: '2017-03-01',
		title: 'Next Co',
		description: '<strong>Software Engineer</strong> @ Presidio',
		content:
			'Learned immensely as a junior engineer and implemented the same in my previous company, now that I have stepped into another firm to shape my adaptive skills and grow in knowledge front.<br/>'
	},
	{
		icon: faCompass,
		date: '2019-12-01',
		title: 'Trip of Decade',
		description: 'Road trip with Domibae | <strong>Work Smart - Save money - Travel Hardcore</strong>',
		content:
			'People say Rest In Peace but, I chose to Live In Peace. Everything happens for a reason, this thing happened for the reason to know about Sivachandran. <a href="https://sivachandranraina.wordpress.com/2020/01/07/trip-of-decade/" target="_blank" rel="noopener noreferrer"">Read more</a>'
	},
	{
		icon: faIdBadge,
		date: '2020-07-01',
		title: 'Promotion',
		description: '<strong>Senior Software Engineer</strong> @ Presidio',
		content:
			'Getting a promotion at the workplace is a kind of milestone in the career. For me, it is like a family to be a part of this amazing firm.<br/>'
	},
	{
		icon: faGlassCheers,
		date: '2022-05-25',
		title: 'Marriage',
		description: 'Lifetime commitment',
		content:
			'Choosing a life partner is not a Rocket science. It is something that makes you flip upside down at first sight itself. People say love at first sight is just an infatuation but according to me, it is actually your instinct. I went that way & married <a href="https://www.instagram.com/dharsinijeyaprakash/" target="_blank" rel="noopener noreferrer"">my girl</a>.'
	}
];

const TimeLine = () => {
	const renderAsHTML = (data) => {
		return {
			__html: data
		};
	};

	return (
		<div className="timeline">
			<div className="text-uppercase position-sticky">
				<h2 className="title">Timeline</h2>
			</div>
			<div className="container">
				<Row>
					<Col xs={12}>
						<div style={{ width: '80%', margin: '0 auto' }}>
							{timelineData.map((data, index) => {
								return (
									<AnimationOnScroll
										offset={200}
										duration={0.5}
										animateIn={index % 2 === 0 ? 'animate__backInRight' : 'animate__backInLeft'}
										animateOut={index % 2 === 0 ? 'animate__backOutRight' : 'animate__backOutLeft'}
										key={index}
									>
										<div className="content">
											<div className="media">
												<Tilt tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
													<div className="media-left d-md-block d-none">
														<FontAwesomeIcon
															icon={data.icon}
															style={{ height: 'inherit', width: '200px' }}
														/>
													</div>
												</Tilt>
												<div className="media-body">
													<Parallax translateX={[ -10, 10 ]}>
														<div>
															<h1>{data.title}</h1>
															<h1>{data.title}</h1>
														</div>
													</Parallax>
													<h5>- {moment(data.date).format('MMMM, YYYY')}</h5>
													<p dangerouslySetInnerHTML={renderAsHTML(data.description)} />
													<p dangerouslySetInnerHTML={renderAsHTML(data.content)} />
												</div>
											</div>
										</div>
									</AnimationOnScroll>
								);
							})}
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default TimeLine;
