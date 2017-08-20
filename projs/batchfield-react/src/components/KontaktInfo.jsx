import React, { Component } from 'react';

import './kontaktInfo.css';



class KontaktInfo extends Component {


  render() {
    return (
     <div className="section third-section contact-text">
	  <div className="container">
	    <div className="row">
	      <div className="col s12  center light pre-introduction">
	            <p>Please,call us for us responses,testmonials. it helps us to improve the quality of our services.</p>
	          
	            <p>Everything we do, we do it for you.</p>
	            <p>We are aspiring to quintenssence.</p>
	      </div>
	      <div className="col s12 m3">   
	            <h5 className="light-blue-text">Open time</h5>
	            <p>Dienstag bis Samstag</p>
	            <p>10:00 – 13:00 und 14:00 – 19:00</p>
	      </div>
	        
	      <div className="col s12 m3">
	            <h5 className="light-blue-text">Address</h5>
	            <p>Hammerweg 8,83022 Rosenheim</p>
	      </div>
	      <div className="col s12 m3">
	            <h5 className="light-blue-text">Telefon</h5>
	            <p>08031 8878777</p>
	      </div>
	      <div className="col s12 m3">
	            <h5 className="light-blue-text">E-mail</h5>
	            <p>
	    <a href="mailto:hello@batchfield.de?Subject=Hello!" target="_top">
	    hello@batchfield.de</a></p>
	            
	      </div>
	    </div>
	  </div>
	</div>
    );
  }
}

export default KontaktInfo;


