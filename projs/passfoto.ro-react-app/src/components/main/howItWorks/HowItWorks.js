import React, { Component } from 'react';







class HowItWorks extends Component {
  render() {
    return (
	    	 <section className="how-it-works text-center">
		      <div className="container">
		        <div className="row">
		          <h3>So einfach und schnell</h3>
		        </div>
		        <div className="row">
		          <div className="col-xs-12 col-sm-4 col-md-4 card" id="card_1">
		            <img className="how-it-works-icons" src="/images/passfoto-rosenheim-termin-vereinbaren-icon.svg" alt="passfoto-rosenheim-termin-vereinbaren-icon" />
		            <h3>Termin vereinbaren</h3>
		            <p>Ob super kurzfristig oder länger geplant – ruf uns einfach an:</p>
		            <a className="btn btn-default button" href="tel:+49-08031-2214040"> 
		                08031-2214040 &nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-earphone"></span>
		            </a>
		          </div>

		          <div className="col-xs-12 col-sm-4 col-md-4 card" id="card_2">
		            <img className="how-it-works-icons" src="/images/passfoto-rosenheim-du-wirst-fotografiert-icon.svg" alt="passfoto-rosenheim-du-wirst-fotografiert-icon" />
		            <h3>Du wirst fotografiert</h3>
		            <p>Danach hast du die Wahl aus mehreren Fotos. Schließlich sollst du auch 100% zufrieden sein!</p>
		          </div>

		          <div className="col-xs-12 col-sm-4 col-md-4 card" id="card_3">
		            <img className="how-it-works-icons" src="/images/passfoto-rosenheim-fotos-sofort-mitnehmen-icon.svg" alt="passfoto-rosenheim-fotos-sofort-mitnehmen-icon.svg" />
		            <h3>Fotos sofort mitnehmen</h3>
		            <p>Blitzschneller Service und perfekte Fotos!</p>
		          </div>

		        </div>
		      </div>
		    </section>
    );
  }
}



export default HowItWorks;


