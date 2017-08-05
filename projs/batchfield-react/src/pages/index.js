import React, { Component } from 'react';
import Navbar from '../components/navBar.js';
import FotoShootings from '../components/fotoShootings.js';

class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FotoShootings />
      </div>
    );
  }
}

export default Index;