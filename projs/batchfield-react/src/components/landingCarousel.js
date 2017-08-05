
import React, { Component } from 'react';


import './landingCarousel.css';




class LandingCarousel extends Component {
	componentDidMout(){
		this.$el = $(this.el);
    	this.$el.owlCarousel({
          center: true,
          margin:0,
          loop:true,
          autoplay:true,
          autoplayTimeout:1500,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          items:1.2,
          nav:true,
          navText: [
                    '<i class="fa fa-chevron-left"></i>',
                    '<i class="fa fa-chevron-right"></i>'
                    ],
          responsive:{
              640:{
                  items:1.4
              },
              1300:{
                  items:1.8
              },
              1700:{
                  items:2
              }
          }
      });



	}

	componentWillUnmount() {
    	this.$el.owlCarousel('destroy');
  	}


	render(){
		return (
			<div className="section landing-promotion landing-page" id="promotion">
  <div className="row">
        <div className="col s12" id="fade-in-aktionen-title">
            <h3 className="center-align light-blue-text text-lighten-1">Aktionen</h3>
        </div>
        <div className="col s12 landing-owl-carouse-wrapper" ref={el => this.el = el}>
              <div className="landing-owl-carousel">


                   <li className="item">
                    <a className="link-to-page passfoto" href="/fotoshootings_preise/fotostudio_passfotorosenheim.html">
                      <img src="/images/batchfield_fotograf_rosenheim_passbild_promotion-03-white-background.jpg" alt="batchfield_fotograf_rosenheim_passfoto_aktion"/>
                        <div className="passfoto-promotion-card">
                          <div className="passfoto-promotion-card-left-block">
                              <div className="passfoto-promotion-card-price-wrapper">
                                  <div className="passfoto-promotion-card-price--body-text-wrapper">
                                      <p className="passfoto-promotion-card-price">10&nbsp;€</p>
                                  </div>
                              </div><img className="passfoto-promotion-card-image" src="/images/passfoto/batchfield_fotograf_rosenheim_passfoto_aktion_passfotos.jpg/"/></div>
                          <div className="passfoto-promotion-card-right-block">
                              <div className="passfoto-promotion-card-text-wrapper">
                                  <h2 className="passfoto-promotion-card-headline">4 Passfoto in nur 5 Minuten</h2>
                                  <h3 className="passfoto-promotion-card-headline sub-headline">Hergestellt auf Premium Hochglanz-Fotopapier &amp; zugeschnitten</h3></div>
                              <ul className="passfoto-promotion-card-ul">
                                  <li className="passfoto-promotion-card-li">100% Bewilligungsrate durch die Ämter GARANTIERT!</li>
                                  <li className="passfoto-promotion-card-li">fotografiert durch einen professionellen Fotografen</li>
                                  <li className="passfoto-promotion-card-li">super schnell fertig in nur 5 Minuten</li>
                                  <li className="passfoto-promotion-card-li">sofort mitnehmen</li>
                              </ul>
                          </div>
                      </div>
                    </a>
                  </li> 


                  <li className="item">
                    <a className="link-to-page" href="/fotoshootings_preise/fotostudio_bewerbungsbilder_rosenheim.html">
                      <img src="/images/bewerbungsbilder/batchfield_fotograf_rosenheim_bewebungsbilder_promotion-01.jpg" alt="batchfield_fotograf_rosenheim_aktion-01"/>
                    </a>
                  </li>




                   <li className="item">
                    <a className="link-to-page" href="/fotoshootings_preise/fotostudio_bewerbungsbilder_rosenheim.html">
                      <img src="/images/bewerbungsbilder/batchfield_fotograf_rosenheim_bewebungsbilder_promotion-02.jpg" alt="batchfield_fotograf_rosenheim_aktion-02"/>
                    </a>
                  </li>


              </div>
        </div>
  </div>
</div>
		);
	}
}



export default LandingCarousel;



