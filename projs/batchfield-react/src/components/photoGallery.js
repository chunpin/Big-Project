import React, { Component } from 'react';


import ReactGallery from 'reactive-blueimp-gallery';


import './photoGallery.css';

import galleryData from '../assets/galleryData.js';





class PhotoGallery extends Component {
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
     
 
        <ReactGallery  withControls>
		  { galleryData.map(item => <ReactGallery.Slide className="photo-gallery-links" { ...item } thumbnail={ item.thumbnail } key={ item.source } />) }
		</ReactGallery>
		
      </div>
    );
  }
}

export default PhotoGallery;


