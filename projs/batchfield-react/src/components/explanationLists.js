import React, { Component } from 'react';

import CallToActionLinks from './callToActionLinks.js';







class ExplanationLists extends Component {

 

  populateHtml(){
  	var items = this.props.items;



  	const html = items.map(function(item){
  		var divStyle = {
  			display: "list-item",
            listStyleImage: 'url(' + 
            				'/images/icons/batchfield_fotograf_rosenheim_icon_' + 
            				item.icon +
            				'.png' +
            				 ')'   
   		};

   		

  		return (
  			 <li style={divStyle}>
  			   <h3 >{item.title}</h3>
  			   <p>{item.desc}</p>
  			 </li>	

  		);
  	});

  	return html;
  }



  render(){
    return (
    		<ul>
	            {this.populateHtml()}
	            <CallToActionLinks />
	        </ul>
    )
  }
}




export default ExplanationLists;