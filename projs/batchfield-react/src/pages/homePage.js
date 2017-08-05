import React, { Component } from 'react';
import Navbar from '../components/navBar.js';
import FotoShootings from '../components/fotoShootings.js';
import LandingCarousel from '../components/landingCarousel.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingCarousel />
        <FotoShootings />
      </div>
    );
  }
}

export default HomePage;