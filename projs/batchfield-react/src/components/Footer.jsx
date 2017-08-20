import React, { Component } from 'react';

import './footer.css'; 

import slugify from 'slugify';

 





class Footer extends Component {


  copyRightYear(){
  	return ` © 2011-${new Date().getFullYear()} `;
  }



  populateCompanyInfo(){
  	const companyInfo = this.props.data.companyInfo;
  	

  	const linkHtml = 	<ul>
  	 						 <li><a className="white-text" href="/">{ companyInfo.name } | photography</a></li>
	             			 <li><a className="white-text" href="https:goo.gl/maps/tdS6tE9oXU32" target="_blank">{ companyInfo.prettyAddress }</a></li>
	             			 <li><a className="white-text" href= {`mailto:${companyInfo.email}`} target="_top"><br/>Email: <u>{ companyInfo.email }</u></a></li>
  	 					</ul>



   

  	return linkHtml;



  }



  populateShootingsLinks (){
  	const shootings = this.props.data.shootings;

  	const linkHtml = shootings.map(function (item){
  		return <li><a className="white-text" href={`/fotoshootings_preise/fotostudio_${slugify(item.title).toLowerCase()}_fotograf_rosenheim.html`} >{item.title}</a></li>
  	});




  	return linkHtml;


  }




  render() {
    return (
	    	<footer className="page-footer shadow_divider" id="landing-footer">
	        <div className="container first_part_footer fixed_width">
	      <div className="row">
	        
	        <div className="col s12 m4 l4">
	          <h5 className="white-text">KONTAKT</h5>
	          <ul>
	           {this.populateCompanyInfo()}
	          </ul>
	        </div>

	        <div className="col s12 m4 l4">
	         <h5 className="white-text">AKTIONEN</h5>
	       	  <ul>
	             {this.populateShootingsLinks()}
	          </ul>
	        </div>

	      
	        


	        <div className="col s12 m4 l4">
	          <h5 className="white-text">ÖFFNUNGSZEITEN</h5>
	          <ul>
	            <li className="white-text">Dienstag bis Samstag</li>
	            <li className="white-text">10:00 – 13:00 und</li>
	            <li className="white-text">14:00 – 19:00</li>
	            <br />
	            <li className="white-text">Sie möchten einen Termin vereinbaren?</li>
	            <li className="white-text">Gerne, rufen Sie uns einfach an:<br/><br/> <a className="telephone_number" href="tel:+49-8031-8878777"><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;08031 8878777</a></li>
	          </ul>
	        </div>

	      </div>
	    </div>





	    <div className="footer-copyright shadow_divider">
	      <div className="container fixed_width">
	        <div className="row">
	          
	                <div className="col s12 m6 left">
	                    <a href="/" lass="footer_logo"><img src="/images/batchfield_logo.png" alt="Startseite" /></a>
	                  <div className="copyright_wrapper">
	                  	{this.copyRightYear()}
	                  <a className="brown-text text-lighten-3" href="/">BATCHFIELD</a> &nbsp;|&nbsp;  photography — all rights reserved</div>
	                </div>
	          




	               <div class="col s12 m6 right">
	                 <div class="row">
	                    <ul class="col s12 social_icons_wrapper" id="social_icons">
	                   </ul>
	                   
	                   
	                   <ul class="col s12 menu-footer-menu">
	                     <li><a href="/fotoshootings_preise/">SHOOTINGS & PREISE</a></li>
	                     <li><a href="/team/">TEAM</a></li>
	                     <li><a href="/kontakt/">KONTAKT</a></li>
	                     <li><a href="/impressum/">IMPRESSUM</a></li>
	                     <li><a href="/datenschutz/">DATENSCHUTZ</a></li>
	                   </ul>
	                 </div>

	               </div>
	        </div>
	      </div>
	    </div>
	  </footer>
    );
  }
}

export default Footer;



// <Footer copyrights="&copy 2015 Copyright Text"
//		moreLinks={
//			<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
//		}
//		links={
//			<ul>
//				{this.populateShootingsLinks()}
//			</ul>
//		}
//		className='example'
//	>
//			<ul>
//				{this.populateCompanyInfo()}
//			</ul>
//
//			<h5 className="white-text">Footer Content</h5>
//			<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
//	</Footer>




