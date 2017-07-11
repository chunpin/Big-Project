import React, { Component } from 'react';





class Hero extends Component {
  render() {
    return (
    	   <section className="hero">
		       <div className="container">
		        <div className="row">
		          <a href="/index.html" className="logo-link-wrapper"><img className="logo logo-wrapper" src="images/passfoto-rosenheim-logo.svg" alt="PassFoto.ro" /></a>
		        </div>
		        <div className="row">
		          <div className="col-xs-12 col-sm-5 hand-wrapper">
		            <img className="img-responsive" src="/images/passfoto-rosenheim-pass_set_only.png" alt="passfoto-rosenheim-pass" />
		          </div>
		          <div className="col-xs-12 col-sm-7 text-center text-wrapper">
		            <h1 className="header first">Biometrische<br/>Passbilder</h1>
		            <h1 className="header second">in 5 Minuten. Garantiert!</h1>
		            <a className="btn btn-default shake-slow shake-constant" href="tel:+49-08031-2214040">
		                08031-2214040 &nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-earphone"></span>
		            </a>
		           



		            <p className="sub-header">Hochwertige <span>Passfotos</span> für deinen <span>Personalausweis</span>, <span>Reisepass</span>, elektronische <span>Gesundheitskarte</span>, <span>Führerschein</span>...</p>

		            <div className="big-price-tag-wrapper">
		              <div className="text-block">
		                <div className="text">
		                  <span>nur</span>
		                  <span>10</span>
		                  <span>€</span>
		                </div>
		              </div>
		            </div>

		          </div>
		          
		        </div>
		     </div>
    	</section>
    );
  }
}



export default Hero;


