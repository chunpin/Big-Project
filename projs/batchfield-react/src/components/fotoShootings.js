import React, { Component } from 'react';

import Fotoshooting from './fotoShooting.js';
import { Row, Container } from 'react-materialize';



class FotoShootings extends Component {
	render(){
		return (
			<Container>
				<Row>
					<Fotoshooting />
					<Fotoshooting />
					<Fotoshooting />
					<Fotoshooting />
					<Fotoshooting />
					<Fotoshooting />
				</Row>
			</Container>
		);
	}
}



export default FotoShootings;