import React, { Component } from 'react';

import './everythingWeDo.css';



function EverythingWeDo ({info}) {

    return (
     	 <section className="section contact-text">
		   <div className="container">
		      <div className="row">
		       <div className="col s12  center light pre-introduction">
		             <h4 className="center-align light-blue-text text-lighten-1">Everything we do, we do it for you.</h4>
		             <div>                          
		               <p></p>
		             </div>
		       </div>
		     
		        <div className="col s12  center" id="fade-in-contact-info">
		             <p>{info.address} | <a href={`tel:+49-${info.tel}`}>{ info.tel }</a> | <a href={`mailto:${info.email}?Subject=Hello!`}  target="_top">{info.email}</a></p>
		       </div>
		       <div className="col s12  center social-icon-wrapper">
		        <ul className="inline-list">
		          <li id="fade-in-social-icon-01"><a href={info.socialMedia.facebook} target="_blank" className="fa fa-facebook-official fa-2x"></a></li>
		          <li id="fade-in-social-icon-02"><a href={info.socialMedia.youtube} target="_blank" className="fa fa-youtube fa-2x"></a></li>
		          <li id="fade-in-social-icon-03"><a href={info.socialMedia.instagram} target="_blank" className="fa fa-instagram fa-2x"></a></li>
		          </ul>
		       </div>
		     </div>
		   </div>
		</section>
    );
}

export default EverythingWeDo;