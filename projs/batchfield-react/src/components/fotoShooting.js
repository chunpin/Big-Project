import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

import './FotoShooting.css'; // Tell Webpack that Button.js uses these styles



class FotoShoting extends Component {
	render(){
		var data = this.props.data;
		return (
			<Col m={4} s={6}>
				<Card className='small'
					header={<CardTitle image={`/images/${data.thumbnail}`}>{data.title}</CardTitle>}
					actions={[<a href='#'>This is a Link</a>]}>
					{data.sub_title}
				</Card>
			</Col>

		);
	}
}

export default FotoShoting;


// /static/media/batchfield_fotograf_rosenheim_bewebungsbilder_promotion-02.b719ac2e.jpg



