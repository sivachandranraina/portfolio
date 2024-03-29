import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Tilt from "react-parallax-tilt";
import { Row, Col, Card, CardBody } from "reactstrap";

import "./Blog.scss";

const posts = [
	{
		title: "Kerala Odyssey",
		img: "https://sivachandranraina.files.wordpress.com/2023/12/cover.webp",
		expert:
			"As the crisp December air enveloped us, my family and I embarked on a once-in-a-lifetime year-end vacation, weaving through the picturesque landscapes of Kerala. Packed into our trusty Innova car were my wife, Dharsini, our newborn daughter, Athithra (a mere 4 months old), my parents, and in-laws. With anticipation in the air, we set out from Madurai, our hearts brimming with excitement for the adventure that lay ahead.",
		dateTime: "December 27, 2023",
		link: "https://sivachandranraina.wordpress.com/2023/12/27/kerala-odyssey-a-magical-year-end-vacation-with-family/",
	},
	{
		title: "Trip of Decade",
		img: "https://sivachandranraina.files.wordpress.com/2020/01/blogcover.jpg?w=640",
		expert:
			"Meeting you guys after a year, yeah I know it is huge. Cool, I have a lot to share with you guys... Actually, I went to new places in the previous year but don't have enough time to describe those trip plans & experiences. In fact, my Kolli hills trip was great but it has",
		dateTime: "January 7, 2020",
		link: "https://sivachandranraina.wordpress.com/2020/01/07/trip-of-decade/",
	},
	{
		title: "Western Odyssey",
		img: "https://sivachandranraina.files.wordpress.com/2019/01/cover.jpg?w=640",
		expert:
			"What's Odyssey?Hell Yeah! rode on the Roads of Western Ghats & Coasts Munnar - Idukki - Vagamon - Varkala - Thenmalai - Cutrallam A well planned year-end trip on December 2018. The preparation was not that much because we already have much experience in riding bikes on all kinda roads. Don't waste too much time",
		dateTime: "January 29, 2019",
		link: "https://sivachandranraina.wordpress.com/2019/01/29/western-odyssey/",
	},
	{
		title: "Mesmerizing Mountains",
		img: "https://sivachandranraina.files.wordpress.com/2018/06/cover1.jpg?w=640",
		expert:
			"Hey, what's up....? Best part of life is what you explore the unknown places Unforgettable things are hard to erase from your mind because that much adventures is on there Bike trip is the only way to taste both of them, exploring the unknown places with the adventure & that is not a new thing",
		dateTime: "June 18, 2018",
		link: "https://sivachandranraina.wordpress.com/2018/06/18/mesmerizing-mountains/",
	}
];

const Blog = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="blog">
			<div className="text-uppercase position-sticky">
				<h2 className="title">Travelog</h2>
			</div>
			<div
				className="container"
				style={{ marginTop: "5rem", marginBottom: "8rem" }}
			>
				<Row>
					<Col xs={12} className="mt-4">
						<Row>
							{posts.map((data, index) => {
								return (
									<Col
										xs={12}
										md={6}
										lg={6}
										className="pl-4 pr-4 mb-4 mt-4"
										key={index}
									>
										<Tilt
											tiltReverse={true}
											tiltMaxAngleX={10}
											tiltMaxAngleY={10}
										>
											<a
												href={data.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Card style={{ 'backgroundImage': `url(${data.img})` }}
													onMouseEnter={() => setShow(true)}
													onMouseLeave={() => setShow(false)}
												>
													<CardBody>
														<div
															className="d-flex justify-content-between"
															style={{ width: "inherit", height: "inherit" }}
														>
															<div>{data.title}</div>
															<div>{data.dateTime}</div>
														</div>
														{show && (
															<Marquee
																delay={0.2}
																className="animate__animated animate__fadeInUp"
																speed={data.title.length * 40}
																gradient={false}
															>
																<h1>{data.title}&nbsp;&nbsp;</h1>
															</Marquee>
														)}
													</CardBody>
												</Card>
											</a>
										</Tilt>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Blog;
