import React, { Component } from 'react';

import PromotionCarousel from '../components/PromotionCarousel';
import FotoShootings from '../components/FotoShootings';

import data from '../assets/data.js';





function  FotoshootingsPreisePage () {
    return (
    	<div>
    	  <PromotionCarousel />
	      <FotoShootings />
      	</div>
    );
}

export default FotoshootingsPreisePage;


