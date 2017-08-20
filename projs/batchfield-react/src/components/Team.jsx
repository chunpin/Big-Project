import React, { Component } from 'react';

import './team.css';


class Team extends Component {

  populateHtml(){
  	var team = this.props.data;
  	const html = team.map(function (item){
  		return(
		        <li className="col m6 unit-wrapper">
		         <div className="row sub-row team-member-wrapper">  
		            <div className="col s12 m6 text-wrapper" >
		              <h5>{item.author}</h5>
		              <blockquote>
		                {item.title}
		              </blockquote>
		            </div>
		            <div className="col s12 m6 image-wrapper center">
		              <img className="responsive-img" src={`/images/team/${item.avator}`} alt={item.avator} />
		            </div>
		        </div>
		      </li>
  		);	
  	});

  	return html;



  }



  render() {
    return (
     	 <section className="section second-section team" id="first_section">
		  <ul className="row main-row">
		  	{this.populateHtml()}
		  </ul>
		</section>
    );
  }
}

export default Team;