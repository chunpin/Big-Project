import React, { Component } from 'react';



// Initialize collapse button
  // $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();



class SideNav extends Component {
	render(){
		return (
			<div>
			<ul id="slide-out" className="side-nav">
    <li><div className="userView">
      <div className="background">
        <img src="images/office.jpg"  alt="office"/>
      </div>
      <a href="#!user"><img className="circle" src="images/yuna.jpg" alt="yuna"/></a>
      <a href="#!name"><span className="white-text name">John Doe</span></a>
      <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#!" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
  </div>
		);
	}
}



class Card extends Component {
	render(){
		return (
			 <div className="card">
			    <div className="card-image waves-effect waves-block waves-light">
			      <img className="activator" src="images/office.jpg" alt="office" />
			    </div>
			    <div className="card-content">
			      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
			      <p><a href="/">This is a link</a></p>
			    </div>
			    <div className="card-reveal">
			      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
			      <p>Here is some more information about this product that is only revealed once clicked on.</p>
			    </div>
			  </div>
		);
	}
}




class Container extends Component {


	render(){
		return (
		     <div className="container">
		     		<SideNav />
		           <div className="row">
		              <div className="col s4">
		                   	 <Card/>
		              </div>
		              		              <div className="col s4">
		                   	 <Card/>
		              </div>
		              		              <div className="col s4">
		                   	 <Card/>
		              </div>
		             
		          </div>
		      </div>	
		);
	}
}

export default Container;


