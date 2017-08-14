import React, { Component } from 'react';
import FotoShootings from '../components/fotoShootings.js';
import LandingCarousel from '../components/landingCarousel.js';
import ServiceIntro from '../components/serviceIntro.js';

import ReactGallery from 'reactive-blueimp-gallery';

import data from '../assets/data.js';
import galleryData from '../assets/galleryData.js';






class HomePage extends Component {
 //  test(){
  	
 //  	var galleryData = [];
	// for (var i = 0 ; i < 78; i++){
	// 	galleryData.push(`{source: '/images/happiness_foto/batchfield_fotograf_rosenheim_${(i < 10 ) ? '0'+i : i}_350px.jpg'}`);
	// }

	// console.log(galleryData);

 //  }




  render() {
    return (
      <div>
        <LandingCarousel />
        <FotoShootings/>
        <ServiceIntro data={data.service_intro}/>
 
        <ReactGallery withControls>
		  { galleryData.map(item => <ReactGallery.Slide { ...item } thumbnail={ item.thumbnail } key={ item.source } />) }
		</ReactGallery>
		
      </div>
    );
  }
}

export default HomePage;


