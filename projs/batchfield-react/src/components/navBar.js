import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';


class Navbar extends Component {
	render(){
		return (
				 <SideNav
					  trigger={<Button>SIDE NAV DEMO</Button>}
					  options={{ closeOnClick: true }}
					  >
					  <SideNavItem userView
					    user={{
					      background: 'img/office.jpg',
					      image: 'img/yuna.jpg',
					      name: 'John Doe',
					      email: 'jdandturk@gmail.com'
					    }}
					  />
					  <SideNavItem href='#!icon' icon='cloud'>First Link With Iconnnnn</SideNavItem>
					  <SideNavItem href='#!second'>Second Link</SideNavItem>
					  <SideNavItem divider />
					  <SideNavItem subheader>Subheader</SideNavItem>
					  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
				</SideNav>
		);


	}



}

export default Navbar;