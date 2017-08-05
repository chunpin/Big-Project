import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

import './FotoShooting.css'; // Tell Webpack that Button.js uses these styles

class FotoShoting extends Component {
	render(){
		return (
			<Col m={4} s={6}>
				<Card className='small'
					header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
					actions={[<a href='#'>This is a Link</a>]}>
					I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
				</Card>
			</Col>

		);
	}
}

export default FotoShoting;


