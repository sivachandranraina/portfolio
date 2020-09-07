import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import './Blog.scss';

class Blog extends Component {
	constructor() {
		super();
		this.state = {
			links: [
				{
					title: 'Trip of Decade',
					img: 'https://sivachandranraina.files.wordpress.com/2020/01/blogcover.jpg?w=640',
					expert:
						"Meeting you guys after a year, yeah I know it is huge. Cool, I have a lot to share with you guys... Actually, I went to new places in the previous year but don't have enough time to describe those trip plans & experiences. In fact, my Kolli hills trip was great but it has",
					dateTime: 'January 7, 2020',
					link: 'https://sivachandranraina.wordpress.com/2020/01/07/trip-of-decade/'
				},
				{
					title: 'Western Odyssey',
					img: 'https://sivachandranraina.files.wordpress.com/2019/01/cover.jpg?w=640',
					expert:
						"What's Odyssey?Hell Yeah! rode on the Roads of Western Ghats & Coasts Munnar - Idukki - Vagamon - Varkala - Thenmalai - Cutrallam A well planned year-end trip on December 2018. The preparation was not that much because we already have much experience in riding bikes on all kinda roads. Don't waste too much time",
					dateTime: 'January 29, 2019',
					link: 'https://sivachandranraina.wordpress.com/2019/01/29/western-odyssey/'
				},
				{
					title: 'Mesmerizing Mountains',
					img: 'https://sivachandranraina.files.wordpress.com/2018/06/cover1.jpg?w=640',
					expert:
						"Hey, what's up....? Best part of life is what you explore the unknown places Unforgettable things are hard to erase from your mind because that much adventures is on there Bike trip is the only way to taste both of them, exploring the unknown places with the adventure & that is not a new thing",
					dateTime: 'June 18, 2018',
					link: 'https://sivachandranraina.wordpress.com/2018/06/18/mesmerizing-mountains/'
				},
				{
					title: 'Goa Glees',
					img: 'https://sivachandranraina.files.wordpress.com/2018/04/lr-edit-0841.jpg?w=640',
					expert:
						'So the trip was over, the story begins here... Yeah it was a trip to Goa For the Instagram story update, check out Goa diary highlight in @sivachandranraina This time big gang, totally 15 people. Well planned together & reached Calangute, Goa in the early morning. Day 1 Resort guy said room check-in will open',
					dateTime: 'April 6, 2018',
					link: 'https://sivachandranraina.wordpress.com/2018/04/06/goa-glees/'
				}
			]
		};
	}
	renderPosts() {
		return this.state.links.map((data, index) => {
			return (
				<Col xs={12} md={6} lg={3} className="mb-4" key={index}>
					<Card>
						<CardImg top width="100%" src={data.img} loading="lazy" alt="image" />
						<CardBody>
							<CardTitle>{data.title}</CardTitle>
							<CardSubtitle>{data.dateTime}</CardSubtitle>
							<CardText>{data.expert}...</CardText>
							<a href={data.link} target="_blank" rel="noopener noreferrer">
								<Button block>Read more</Button>
							</a>
						</CardBody>
					</Card>
				</Col>
			);
		});
	}
	render() {
		return (
			<div className="blog">
				<div className="text-uppercase position-sticky">
					<h2 className="title">Blog</h2>
				</div>
				<div className="container">
					<Row>
						<Col xs={12} className="mt-4">
							<Row>{this.renderPosts()}</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Blog;
