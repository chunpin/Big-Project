import React, { Component } from 'react';
import { Navbar, NavItem, Container } from 'react-materialize';

import './nav.css';





class Nav extends Component {
	render(){
		const info = this.props.data;

		return (
			<section className="nav-section">
				<div className="header-contact-info-wrapper">
					<Container>
						<a className="header-contact-info" href={`tel:+49-${info.tel}`}>
							<i className="fa fa-map-marker" aria-hidden="true"></i>
							{info.tel}
						</a>
						<a className="header-contact-info" href="#">
							<i className="fa fa-phone" aria-hidden="true"></i>
							{info.address}
						</a>
					</Container>
				</div>

				<Container className="nav-container">


			   		<Navbar  brand='Book Now' left={true} href="/">
			   				<NavItem  className="logo-wrapper">
				   				<a href="/"> 
				   					<img className="logo-img" src="/images/logo/batchfield_logo.png" alt="batchfield_logo"/>
				   				</a>
			   				</NavItem>

							<NavItem href='/fotoshootings_preise'>GSHOOTINGS & PREISE</NavItem>
							<NavItem href='/team'>TEAM</NavItem>
							<NavItem href='/kontakt'>KONTAKT</NavItem>
					</Navbar>
				</Container>
			</section>
		);


	}



}

export default Nav;


