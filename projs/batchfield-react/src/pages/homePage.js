import React, { Component } from 'react';
import FotoShootings from '../components/fotoShootings.js';
import LandingCarousel from '../components/landingCarousel.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <LandingCarousel />
        <FotoShootings />
      </div>
    );
  }
}

export default HomePage;