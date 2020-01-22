import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import './Blog.css';

class Blog extends Component {
	constructor() {
		super();
		this.state = {
			links: [
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
				},
				{
					title: 'Witnessed Wayanad',
					img: 'https://sivachandranraina.files.wordpress.com/2018/01/cover.jpg?w=640',
					expert:
						'Well, this one is about the trip with my bae(Dominar400). Yes, I bought a new bike in August. Wayanad was the first trip with my bae. DAY ONE Early morning started from Chennai to reach Bangalore, after Sriperambathur joined State Highway with little bit traffic, on the way first stopping to relax and had tea',
					dateTime: 'January 16, 2018',
					link: 'https://sivachandranraina.wordpress.com/2018/01/16/witnessed-wayanad/'
				}
			]
		};
	}
	renderPosts() {
		return this.state.links.map((data, index) => {
			return (
				<Col xs={12} sm={6} md={3} key={index} className="">
					<Card>
						<CardImg top width="100%" src={data.img} alt="image" />
						<CardBody>
							<CardTitle>{data.title}</CardTitle>
							<CardSubtitle>{data.dateTime}</CardSubtitle>
							<CardText>{data.expert}</CardText>
							<a href={data.link} target="_blank">
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
				<div className="container">
					<Row>
						<Col xs={12} className="text-center text-uppercase">
							<h2>Blog</h2>
						</Col>
						<Col xs={12}>
							<Row>{this.renderPosts()}</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Blog;
