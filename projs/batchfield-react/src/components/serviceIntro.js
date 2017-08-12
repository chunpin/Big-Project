import React, { Component } from 'react';

import './serviceIntro.css';


class ServiceIntro extends Component {
  populateHtml(){  	
  	const data = this.props.data;
  	const html = data.map(function (item){
  		return (
  			 <li className="col s12 m4 service-intro">
		          <div className="icon-block">
		            <h2 className="center brown-text"><i className={item.icon}></i></h2>
		            <h5 className="center">{item.title}</h5>
		            <p className="light">{item.desc}</p>
		          </div>
		      </li>	
  		);
  	});

  	return html;
  }



  render() {
    return (
      <section className="section description">
   		<div className="container">
	
		      <ul className="row">
		        {this.populateHtml()}
		      </ul>
		 </div>
 	 </section>
    );
  }
}

export default ServiceIntro;