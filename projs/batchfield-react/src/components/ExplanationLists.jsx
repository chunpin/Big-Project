import React, { Component } from 'react';

import './explanationLists.css';


import CallToActionLinks from './CallToActionLinks';







      class ExplanationLists extends Component {

       

        populateHtml(){
          // asign lists data into variable "items"
        	var items = this.props.items; 

          // loop though items and pass danymic style into li element
        	const html = items.map(function(item){
        		var divStyle = {
              backgroundRepeat:"no-repeat",
              backgroundImage: 'url(' + 
                  			     	'/images/icons/batchfield_fotograf_rosenheim_icon_' + 
                  			     	item.icon +
                  		    		'.png' +
                  		    		 ')'   
         		};	

            // html templating 
        		return (
        			 <li className="explanation-list">
                 <span className="explanation-list-icon" style={divStyle}></span>
                 <div className="explanation-list-wrapper">
          			   <h5 >{item.title}</h5>
          			   <p>{item.desc}</p>
                 </div>
        			 </li>	

        		);
        	});

          // return html
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