import React, { Component } from 'react';
import FotoShootings from '../components/fotoShootings.js';
import PromotionCarousel from '../components/promotionCarousel.js';
import ServiceIntro from '../components/serviceIntro.js';
import PhotoGallery from '../components/photoGallery.js';



import data from '../assets/data.js';












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
        <PromotionCarousel />
        <FotoShootings/>
        <ServiceIntro data={data.service_intro}/>
        <PhotoGallery />
       
      </div>
    );
  }
}

export default HomePage;


