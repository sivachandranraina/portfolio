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
	{ name: 'Presidio', logo: presidio, bgImg: presidioBg, service: { from: 'Mar, 2017', to: 'Present' } },
	{ name: 'Commutatus', logo: cmslogo, bgImg: cmsBg, service: { from: 'Jan, 2017', to: 'Feb, 2017' } },
	{ name: 'Infofaces', logo: ifslogo, bgImg: ifsBg, service: { from: 'Jun, 2015', to: 'Dec, 2016' } }
];

const Tile = ({ name, bgImg, logo, service, index }) => {
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
						<div style={{ position: 'relative' }}>
							<Marquee
								gradient={false}
								speed={name.length * 30}
								delay={0.2}
								className="animate__animated animate__fadeInUp"
							>
								<span>{name} &nbsp;</span>
							</Marquee>
							<div className="service">
								<div>{service.to}</div>
								<div>{service.from}</div>
							</div>
						</div>
					)}
				</div>
				<div className="media-right">
					<Parallax translateX={[ 0, -40 ]}>
						<div className="logo">
							<img src={logo} alt={name} />
						</div>
					</Parallax>
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
				<div className="company">{data.map((data, index) => <Tile {...data} index={index} key={index} />)}</div>
			</div>
		</div>
	);
};

export default WorkTraces;
