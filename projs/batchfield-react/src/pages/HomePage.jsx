import React, { Component } from 'react';
import FotoShootings from '../components/FotoShootings';
import PromotionCarousel from '../components/PromotionCarousel';
import ServiceIntro from '../components/ServiceIntro';
import PhotoGallery from '../components/PhotoGallery';



import data from '../assets/data.js';





function HomePage () {
    return (
      <div>
        <PromotionCarousel />
        <FotoShootings/>
        <ServiceIntro data={data.service_intro}/>
        <PhotoGallery />
       
      </div>
    );
}


export default HomePage;


