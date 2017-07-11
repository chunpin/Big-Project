import React, { Component } from 'react';



import './header.css';




class Header extends Component {
  render() {
    return (
    	 <div>
	    	 <section className="section nav_bar_very_top">
		      <div className="container">
		        <a className="telephone_number" href="tel:+49-08031-2214040">
		          <i className="glyphicon glyphicon-earphone"></i>&nbsp;&nbsp;&nbsp;08031 2214040
		        </a> 
		        <a className="google_address" href="http://www.google.com">
		          <i className="glyphicon glyphicon-map-marker"></i>&nbsp;&nbsp;&nbsp;Hammerweg 8 , 83022 Rosenheim
		        </a>
		      </div>
		    </section>
	    </div>
    );
  }
}



export default Header;
