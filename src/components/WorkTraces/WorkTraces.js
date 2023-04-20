import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';
import ifslogo from './../../assets/images/infofaces.png';
import cmslogo from './../../assets/images/commutatus.png';
import presidio from './../../assets/images/presidio-logo.svg';
import ifsBg from './../../assets/images/infofaces-outside.jpg';
import cmsBg from './../../assets/images/commutatus-outside.jpg';
import presidioBg from './../../assets/images/presidio-outside.jpg';

import './WorkTraces.scss';
import { Parallax } from 'react-scroll-parallax';

const data = [
	{ name: 'Presidio', logo: presidio, bgImg: presidioBg },
	{ name: 'Commutatus', logo: cmslogo, bgImg: cmsBg },
	{ name: 'Infofaces', logo: ifslogo, bgImg: ifsBg }
];

const Tile = ({ name, bgImg, index }) => {
	const [ show, setShow ] = useState(false);
	return (
		<Tilt tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
			<div className="company-info media" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
				<div className="media-left">
					<Parallax translateX={[ -40, 20 ]}>
						<span>{data.length - index}.</span>
					</Parallax>
				</div>
				<div className="wrapper media-body" style={{ backgroundImage: `url(${bgImg})` }}>
					{show && (
						<Marquee
							gradient={false}
							speed={name.length * 20}
							delay={0.2}
							className="animate__animated animate__fadeInUp"
						>
							<span>{name} &nbsp;</span>
						</Marquee>
					)}
				</div>
			</div>
		</Tilt>
	);
};

const WorkTraces = () => {
	return (
		<div className="work-traces">
			<div className="text-uppercase position-sticky">
				<h2 className="title">Work Traces</h2>
			</div>
			<div className="container">
				<div className="company">
					{data.map(({ name, logo, bgImg }, index) => (
						<Tile name={name} bgImg={bgImg} index={index} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkTraces;
