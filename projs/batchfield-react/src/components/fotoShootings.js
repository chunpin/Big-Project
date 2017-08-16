import React, { Component } from 'react';

import Fotoshooting from './fotoShooting.js';
import { Row, Container } from 'react-materialize';


import './fotoShootings.css';


import data from '../assets/data.js';







class FotoShootings extends Component {
	dynamicTitle () {
		var currentPath = window.location.pathname;

		if( currentPath === "/" || currentPath === "/fotoshootings_preise" ){
			return "Fotoshootings";
		} else {
			return "Entdecken Sie auch unsere weiteren Angebote!";
		}


	}

	populateHtml (){
		const shootingsData = data.shootings;

		const html = shootingsData.map(function (item){
			return <Fotoshooting data={item}/>
		}); 

		return html;
	}



	render(){
		return (
			<section className="section shadow_divider">
				<div className="container photo-gallery fixed_width">

			            <div className="row">
				           		  <div className="col s12" id="fade-in-aktionen-title">
				                     <h3 className="center-align light-blue-text text-lighten-1 price-headline">
				                     	{this.dynamicTitle()}
				                     </h3>
								  </div>

								   {this.populateHtml()}
				        </div>
				  </div>
			</section>
		);
	}
}



export default FotoShootings;