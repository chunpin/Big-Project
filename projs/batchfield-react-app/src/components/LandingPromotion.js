import React, { Component } from 'react';


class LandingPromotion extends Component {
  render(){
    return (
        <div className="section landing-promotion landing-page" id="promotion">
            <div className="row">
            <div className="col s12" id="fade-in-aktionen-title">
                <h3 className="center-align light-blue-text text-lighten-1">Aktionen</h3>
            </div>
            <div className="col s12 landing-owl-carouse-wrapper">
                  <div className="landing-owl-carousel">

                       <div className="item">
                        <a className="link-to-page passfoto" href="/fotoshootings_preise/fotostudio_passfotorosenheim.html">
                          <img src="/images/batchfield_fotograf_rosenheim_passbild_promotion-03-white-background.jpg" alt="batchfield_fotograf_rosenheim_passfoto_aktion" />
                            <div className="passfoto-promotion-card">
                              <div className="passfoto-promotion-card-left-block">
                                  <div className="passfoto-promotion-card-price-wrapper">
                                      <div className="passfoto-promotion-card-price--body-text-wrapper">
                                          <p className="passfoto-promotion-card-price">10&nbsp;€</p>
                                      </div>
                                  </div><img className="passfoto-promotion-card-image" src="/images/passfoto/batchfield_fotograf_rosenheim_passfoto_aktion_passfotos.jpg" /></div>
                              <div className="passfoto-promotion-card-right-block">
                                  <div className="passfoto-promotion-card-text-wrapper">
                                      <h2 className="passfoto-promotion-card-headline">4 Passfoto in nur 5 Minuten</h2>
                                      <h3 className="passfoto-promotion-card-headline sub-headline">Hergestellt auf Premium Hochglanz-Fotopapier &amp; zugeschnitten</h3>
                                   </div>
                                  <ul className="passfoto-promotion-card-ul">
                                      <li className="passfoto-promotion-card-li">100% Bewilligungsrate durch die Ämter GARANTIERT!</li>
                                      <li className="passfoto-promotion-card-li">fotografiert durch einen professionellen Fotografen</li>
                                      <li className="passfoto-promotion-card-li">super schnell fertig in nur 5 Minuten</li>
                                      <li className="passfoto-promotion-card-li">sofort mitnehmen</li>
                                  </ul>
                              </div>
                          </div>
                        </a>
                      </div> 


                      <div className="item">
                        <a className="link-to-page" href="/fotoshootings_preise/fotostudio_bewerbungsbilder_rosenheim.html">
                          <img src="/images/bewerbungsbilder/batchfield_fotograf_rosenheim_bewebungsbilder_promotion-01.jpg" alt="batchfield_fotograf_rosenheim_aktion-01" />
                        </a>
                      </div>




                       <div className="item">
                        <a className="link-to-page" href="/fotoshootings_preise/fotostudio_bewerbungsbilder_rosenheim.html">
                          <img src="/images/bewerbungsbilder/batchfield_fotograf_rosenheim_bewebungsbilder_promotion-02.jpg" alt="batchfield_fotograf_rosenheim_aktion-02" />
                        </a>
                      </div>


                  </div>
            </div>
      </div>
    </div>
    );

  }

}


export default LandingPromotion;