import React, { Component } from 'react';


class InfoNav extends Component{
  render(){
    return (
        <nav className="section nav_bar_very_top">
           <div className="container">
            <p>
              
              <a className="telephone_number" href="tel:+49-08031-8878777"><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;08031 8878777</a>
              <a className="google_address" href="https://goo.gl/maps/tdS6tE9oXU32" target="_blank"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;Hammerweg 8 , 83022 Rosenheim</a>
            </p>
          </div>
      </nav>

    );
  }
}


export default InfoNav;