import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import ifslogo from './../../assets/images/infofaces.png';
import cmslogo from './../../assets/images/commutatus.png';
import jaishulogo from './../../assets/images/cloudix.webp';
import './WorkTraces.css';

class WorkTraces extends Component {
	render() {
		return (
			<div className="work-traces">
				<div className="container">
					<Row>
						<Col xs={12} className="text-center text-uppercase position-sticky">
							<h2 className="title">Work Traces</h2>
						</Col>
						<Col xs={12} className="mt-4">
							<Row>
								<Col xs={12} md={4} className="company-logo">
									<img src={ifslogo} alt="logo" />
								</Col>
								<Col xs={12} md={4} className="company-logo">
									<img src={cmslogo} alt="logo" />
								</Col>
								<Col xs={12} md={4} className="company-logo">
									<img src={jaishulogo} alt="logo" />
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default WorkTraces;
