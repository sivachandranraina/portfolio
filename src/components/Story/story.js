import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import './story.scss';
import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';

const Story = () => {
	return (
		<div className="story">
			<div className="text-uppercase position-sticky">
				<h2 className="title">Fictionist</h2>
			</div>
			<div className="container">
				<Row>
					<Col xs={12} className="my-5">
						<Row className="image-block">
							<Col xs={12} className="text-center">
								<Parallax translateY={[ 40, -10 ]}>
									<Row>
										{/* <Col xs={12} lg={4}>
										<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} tiltReverse={true}>
											<img src={story} loading="lazy" alt="18/32" />
										</Tilt>
									</Col> */}
										<Col xs={12}>
											<blockquote className="blockquote">
												<p className="mb-0 text-uppercase">18/32</p>
												<footer className="blockquote-footer">
													<cite title="Source Title">Sivachandran</cite>
												</footer>
											</blockquote>
											<Tilt tiltReverse={true}>
												<p className="caption">
													A fictional story about
													<br />Siva & Sathvika | Deva & Maya
													<br />Reality x Imagination
													<div className="before" />
												</p>
											</Tilt>
											<br />
											<p>
												Whenever you sleep, if it’s not deep means the dream plays a major role
												in that time period with a lot of imagination and creativity whichever
												you saw in the previous day or anything about from your sub-conscious
												mind. That’s how this story is going to travel… it’s actually 17.07.17
												06:50 AM(Monday) reached Work town from Home town I was very tired due
												to semi sleeper bus so planned to take rest for some time and then get
												ready to go office Well settled and cuddled the pillow, slowly closed my
												eyes…
											</p>
										</Col>
										<Col xs={12}>
											<a
												href="https://sivachandranraina.wordpress.com/18bar32/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="primary" outline>
													Read more
												</Button>
											</a>
										</Col>
									</Row>
								</Parallax>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Story;
