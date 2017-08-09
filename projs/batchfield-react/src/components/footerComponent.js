import React, { Component } from 'react';

import { Footer } from 'react-materialize';

import slugify from 'slugify';

 

class FooterComponent extends Component {
  populateCompanyInfo(){
  	const companyInfo = this.props.data.companyInfo;
  	var keys = Object.keys(companyInfo);
  
  	const linkHtml =  keys
  						.filter((item) => item != 'socialMedia' && item != 'prettyAddress')
  						.map((key) => <li>{companyInfo[key]}</li>);

   

  	return linkHtml;



  }



  populateShootingsLinks (){
  	const shootings = this.props.data.shootings;

  	const linkHtml = shootings.map(function (item){
  		return <li><a className="grey-text text-lighten-3" href={ slugify(item.title).toLowerCase() }>{item.title}</a></li>
  	});

  	return linkHtml;


  }




  render() {
    return (
     <Footer copyrights="&copy 2015 Copyright Text"
		moreLinks={
			<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
		}
		links={
			<ul>
				{this.populateShootingsLinks()}
			</ul>
		}
		className='example'
	>
			<ul>
				{this.populateCompanyInfo()}
			</ul>

			<h5 className="white-text">Footer Content</h5>
			<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
	</Footer>
    );
  }
}

export default FooterComponent;