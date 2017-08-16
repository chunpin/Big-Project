import React, { Component } from 'react';

import PromotionCarousel from '../components/promotionCarousel.js';
import FotoShootings from '../components/fotoShootings.js';

import data from '../assets/data.js';





class fotoshootingsPreisePage extends Component {

  render() {
    return (
    	<div>
    	  <PromotionCarousel />
	      <FotoShootings />
      	</div>
    );
  }
}

export default fotoshootingsPreisePage;


