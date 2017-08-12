import React, { Component } from 'react';
import FotoShootings from '../components/fotoShootings.js';
import LandingCarousel from '../components/landingCarousel.js';
import ServiceIntro from '../components/serviceIntro.js';

import data from '../assets/data.js';



class HomePage extends Component {
  render() {
    return (
      <div>
        <LandingCarousel />
        <FotoShootings/>
        <ServiceIntro data={data.service_intro}/>
      </div>
    );
  }
}

export default HomePage;