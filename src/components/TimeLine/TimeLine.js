import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import HorizontalTimeline from 'react-horizontal-timeline';
import SwipeableViews from 'react-swipeable-views';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faBaby, faGraduationCap, faBriefcase, faStar, faForward, faCompass } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import './TimeLine.scss';

class TimeLine extends Component {
	constructor() {
		super();
		this.state = {
			value: 5,
			previous: 4,
			values: [
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
						'Day: Happy about getting Degree :D <br/> Night: Sad for parting away from my college and the Stars(Professors) who crafted my knowledge and gave it a shape!'
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
					description: '<strong>Senior Software Engineer</strong> @ Cloudix',
					content:
						'After having learned a lot drastically and implemented the same in my previous company, now that I have stepped into another startup to shape my adaptive skills and grow in knowledge front.<br/>'
				},
				{
					icon: faCompass,
					date: '2019-12-01',
					title: 'Trip of Decade',
					description: 'Road trip with Domibae | <strong>Work Smart - Save money - Travel Hardcore</strong>',
					content:
						'People say Rest In Peace but, I chose to Live In Peace. Everything happens for a reason, this thing happened for the reason to know about Sivachandran. <a href="https://sivachandranraina.wordpress.com/2020/01/07/trip-of-decade/" target="_blank" rel="noopener noreferrer"">Read more</a>'
				}
			],
			minEventPadding: 20,
			maxEventPadding: 120,
			linePadding: 100,
			labelWidth: 100,
			fillingMotionStiffness: 150,
			fillingMotionDamping: 25,
			slidingMotionStiffness: 150,
			slidingMotionDamping: 25,
			stylesForeground: '#FFF',
			stylesOutline: '#777',
			isTouchEnabled: true,
			isKeyboardEnabled: true,
			isOpenEnding: true,
			isOpenBeginning: true
		};
	}

	renderAsHTML(data) {
		return {
			__html: data
		};
	}

	render() {
		return (
			<div className="timeline">
				<div className="text-uppercase position-sticky">
					<h2 className="title">Timeline</h2>
				</div>
				<div className="container">
					<Row>
						<Col xs={12} className="mt-4">
							<div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
								<HorizontalTimeline
									getLabel={(e, t) => {
										return moment(e).format('MMM YYYY');
									}}
									index={this.state.value}
									indexClick={(index) => {
										this.setState({ value: index, previous: this.state.value });
									}}
									values={this.state.values.map((data) => data.date)}
									fillingMotion={{
										stiffness: this.state.fillingMotionStiffness,
										damping: this.state.fillingMotionDamping
									}}
									isKeyboardEnabled={this.state.isKeyboardEnabled}
									isTouchEnabled={this.state.isTouchEnabled}
									labelWidth={this.state.labelWidth}
									linePadding={this.state.linePadding}
									maxEventPadding={this.state.maxEventPadding}
									minEventPadding={this.state.minEventPadding}
									slidingMotion={{
										stiffness: this.state.slidingMotionStiffness,
										damping: this.state.slidingMotionDamping
									}}
									styles={{
										background: this.state.stylesBackground,
										foreground: this.state.stylesForeground,
										outline: this.state.stylesOutline
									}}
									isOpenEnding={this.state.isOpenEnding}
									isOpenBeginning={this.state.isOpenBeginning}
								/>
							</div>
						</Col>
						<Col xs={12}>
							<div style={{ width: '80%', margin: '0 auto' }}>
								<SwipeableViews
									index={this.state.value}
									onChangeIndex={(value, previous) => {
										this.setState({ value: value, previous: previous });
									}}
									resistance
								>
									{this.state.values.map((data, index) => {
										return (
											<div key={index} className="content">
												<h1>
													<FontAwesomeIcon icon={data.icon} className="text-muted" />{' '}
													{data.title}
												</h1>
												<h5>- {moment(data.date).format('MMMM, YYYY')}</h5>
												<p dangerouslySetInnerHTML={this.renderAsHTML(data.description)} />
												<p dangerouslySetInnerHTML={this.renderAsHTML(data.content)} />
											</div>
										);
									})}
								</SwipeableViews>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default TimeLine;
