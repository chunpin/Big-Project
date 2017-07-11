import React, { Component } from 'react';




class NavTabs extends Component {

  populateTabsHtml (){
  		var keys = Object.keys(this.props.data); // ['tab1', 'tab2', 'tab3'];
  		var data = this.props.data;


  		const keyHtml = keys.map(function (item){
  			return (
  				<li role="presentation" id="first-tab" className={ (data[item].active)? "active" : "" }> 
		            <a href={`#${data[item].tab_content.content_id}`} aria-controls="home" role="tab" data-toggle="tab">
		            <div className="tab-image-wrapper">
		              <img className="tab-image" src={`/images/${data[item].thumbnail}`} alt={data[item].title} />
		            </div>
		            <div className="tabs-text-wrapper">
		              <h5>{data[item].title}</h5>
		              <p>{data[item].sub_title}</p>
		            </div>
		            </a>
		        </li>
  			);
  		});

  		return keyHtml;

  }


  render() {
    return (
    	<ul className="nav nav-tabs" role="tablist">
    			{this.populateTabsHtml()}
        </ul>
    );
  }
}



export default NavTabs;


         