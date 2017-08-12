import React, { Component } from 'react';
import { Navbar, NavItem, Container } from 'react-materialize';

import './nav.css';



class Nav extends Component {

	render(){
		return (
	     <div>
	      <nav className="section nav_bar_very_top">
		       <div className="container">
		        <p>
		          
		          <a className="telephone_number" href="tel:+49-08031-8878777"><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;08031 8878777</a>
		          <a className="google_address" href="https://goo.gl/maps/tdS6tE9oXU32" target="_blank"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;Hammerweg 8 , 83022 Rosenheim</a>
		        </p>
		      </div>

		  </nav>






  

		  <nav className="white" role="navigation">
		     <div className="nav-wrapper container">
		      <a id="logo-container" href="/index.html" className="brand-logo"><img src="/images/batchfield_logo.png" alt="BATCHFIELD"/></a>


		      <ul id="slide-out" className="side-nav">
		        <li className="logo"><a href="/index.html" className="waves-effect waves-blue"><img src="/images/batchfield_logo.png" alt="BATCHFIELD"/></a></li>
		        <li><a href="/fotoshootings_preise/index.html" className="waves-effect waves-blue">Shootings & Preise</a></li>
		        <li><a href="/team/index.html" className="waves-effect waves-blue">Team</a></li>
		        <li><a href="/kontakt/index.html" className="waves-effect waves-blue">Kontakt</a></li>
		        <li><a href="/images/gutschein.png" target="_blank" className="waves-effect waves-blue">Gutschein</a></li>
		      </ul>

		       <ul className="right hide-on-med-and-down">
			       <li><a href="termine_buchen.html" className="waves-effect waves-blue termin-button">Termine<span className="fa fa-calendar"></span></a></li>
			       <li><a href="/images/gutschein.png" target="_blank" className="waves-effect waves-blue">Gutschein<span className="fa fa-gift"></span></a></li>
				   <li><a href="/online-booking/book-now.html" className="waves-effect waves-blue">Book now<span className="fa fa-calendar"></span></a></li>
			   </ul>


		      <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
		    </div>
		  </nav>
	   </div>
		);


	}



}

export default Nav;





