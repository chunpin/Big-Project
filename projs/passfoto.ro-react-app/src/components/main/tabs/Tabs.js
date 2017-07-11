import React, { Component } from 'react';

import NavTabs from './navTabs/NavTabs.js';
import TabContent from './tabContent/TabContent.js';


import dummyData from './dummy_data.js';




class Tabs extends Component {
  constructor(){
  	super();
  	this.state = Object.assign({}, dummyData);
  	// this.state = dummyData;

  	// bind this.updateContent to the class
 	this.updateContent = this.updateContent.bind(this); 	
  }



  updateContent(){
  	const myObject3 = {
  			title: "here is the myObject 3 title text",
	  		sub_title:"Personalausweis, Reisepass, Führerschein",
	  		active:true,
	  		price:10,
	  		garantie_text:"Unsere Passbilder werden von den Behörden garantiert akzeptiert.",
	  		thumbnail:"pass_single.jpg",
	  		tab_content:{
	  			content_id:"home",
	  			headline:"4 Passbilder in nur 5 Minuten",
	  			sub_headline:"Hergestellt auf Premium Hochglanz-Fotopapier & zugeschnitten",
	  			image:"passfoto-rosenheim-biometrische-passbilder-big-trans-bg.png",
	  			bullet_points: [
	  			"100% Bewilligungsrate durch die Ämter GARANTIERT!",
	  			"fotografiert durch einen professionellen Fotografen",
	  			"super schnell fertig in nur 5 Minuten",
	  			"sofort mitnehmen"
	  			]

	  		},
  	}
  	this.setState({tab2: myObject3});
  }
 


  render() {
    return (
    	<section className="three-packages-section text-center">
    		<div className="container three-package-tabs">
    			<NavTabs data={this.state}/>
    			<TabContent data={this.state} />



    			{/*<button onClick = { this.updateContent.bind(this) } > {this.state.tab2.title} </button>*/}


    		</div>
    	</section>
    );
  }
}



export default Tabs;


