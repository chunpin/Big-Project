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
				          <section className="section">
			<div className="container photo-gallery fixed_width">

		            <div className="row">
			           		  <div className="col s12" id="fade-in-aktionen-title">
			                     <h3 className="center-align light-blue-text text-lighten-1 price-headline">Fotoshootings</h3>
							  </div>

							   {this.populateHtml()}
			        </div>
			  </div>
			</section>
		);
	}
}



export default FotoShootings;