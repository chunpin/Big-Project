import React, { Component } from 'react';



 





 class TopicList extends Component {


 	render(){
 		return (
 			<li class="col s6 m3 l3 center">
		                  	
			                      <div class="card">
			                        <div class="card-image">
			                          <a class="light-box-wrapper" href="/fotoshootings_preise/fotostudio_kidsfotograf_rosenheim.html">
			                            <img src="/images/photo-section-kids-thumbnail.jpg" alt="kids-thumbnail.jpg" />
			                            <span class="card-price-wrapper">
			                              <div class="text-wrapper">
			                                <p class="card-price">39€</p>
			                              </div>
			                            </span>
			                            <div class="overlay_background"><div class="overlay_title">Kinder</div></div>
			                          </a>
			                        </div>
			                        <div class="card-content">
			                          <span class="card-title">Kids</span>
			                          
			                          
			                          <p>das Shooting für Babies & Kinder</p>
			                          </div>
			                          <div class="card-action center">
			                            <a href="/fotoshootings_preise/fotostudio_kidsfotograf_rosenheim.html" class="button">Preise & Infos</a>
			                          </div>
			                        </div>
          
		                  	</li>

 		);
 	}

 }




class Topics extends Component {
  render() {
    return (
		        
		<div class="container photo-gallery fixed_width">
		      <div class="section">	
		            <div class="row">
		            	  <div class="col s12" id="fade-in-aktionen-title">
		                     <h3 class="center-align light-blue-text text-lighten-1 price-headline">Fotoshootings</h3>
		                  </div>

		                  <ul>
		                  	<TopicList  />
		                  	
		                  </ul>

		            </div>
		       </div>
		</div>


    );
  }
}


export default Topics;