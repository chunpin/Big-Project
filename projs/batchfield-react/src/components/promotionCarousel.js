
import React, { Component } from 'react';

import  Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './promotionCarousel.css';



import bewebungsbilderPromotion01 from '../assets/images/batchfield_fotograf_rosenheim_bewebungsbilder_promotion-02.jpg';





class PromotionCarousel extends Component {

	render(){
		var settings = {
		  infinite: true,
	      infinite: true,
	      speed: 500,
	      // centerMode:true,
	      // adaptiveHeight:true,
	      slidesToShow: 2,
		  slidesToScroll: 2,
	      responsive: [
		    {
		      breakpoint: 3000,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true,
		        centerMode:true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode:false
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]

	    };

		return (
		   <section>
		   	<h1 className="title">Aktionen</h1>

		   	<Slider {...settings}>
		   	{/*
		   	    <div><h3>1</h3></div>
		   	    <div><h3>2</h3></div>
		   	    <div><h3>3</h3></div>
		   		 */}
		        <div><a className="promotion-link" href="#"><img src={bewebungsbilderPromotion01} alt="bewebungsbilderPormotion"/></a></div>
		        <div><a className="promotion-link" href="#"><img src={bewebungsbilderPromotion01} alt="bewebungsbilderPormotion"/></a></div>
		        <div><a className="promotion-link" href="#"><img src={bewebungsbilderPromotion01} alt="bewebungsbilderPormotion"/></a></div>
		       
	      	</Slider>
		   </section>
		   
		);
	}
}



export default PromotionCarousel;



