import React, { Component } from 'react';

import Fotoshooting from './fotoShooting.js';
import { Row, Container } from 'react-materialize';

import data from '../assets/data.js';


import './fotoShootings.css';



class FotoShootings extends Component {
	populateHtml (){
		const shootingsData = data.shootings;
		const html = shootingsData.map(function (item){
			return <Fotoshooting data={item}/>
		}); 

		return html;
	}



	render(){
		return (
			<section>
			    <h1 className="title">Fotoshootings</h1>

				<Container>
					<Row>
						{this.populateHtml()}
					</Row>
				</Container>
			</section>
		);
	}
}



export default FotoShootings;