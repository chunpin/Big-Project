import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';


class Nav extends Component {
	render(){
		return (
				<Navbar brand='logo' left>
					<NavItem href='get-started.html'>SHOOTINGS & PREISE</NavItem>
					<NavItem href='get-started.html'>TEAM</NavItem>
					<NavItem href='get-started.html'>KONTAKT</NavItem>
					<NavItem href='components.html'>GUTSCHEIN</NavItem>
				</Navbar>
		);


	}



}

export default Nav;