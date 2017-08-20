
import React, { Component } from 'react';



import OwlCarousel from 'react-owl-carousel2';


import 'react-owl-carousel2/src/owl.carousel.css';
import './promotionCarousel.css';



import bewebungsbilderPromotion01 from '../assets/images/batchfield_fotograf_rosenheim_bewebungsbilder_promotion-02.jpg';


const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
    autoplayHoverPause:true,
    center:true,
    lazyLoad:true,
    animateOut:true,
    loop:true, //Infinity loop. Duplicate last and first items to get loop illusion.
    nav:true,
    navText: [
              '<i class="fa fa-chevron-left"></i>',
              '<i class="fa fa-chevron-right"></i>'
              ],
    responsive:{
        640:{
            items:1.4
        },
        1300:{
            items:1.8
        },
        1700:{
            items:2
        }
    }
};
 


class PromotionCarousel extends Component {

	render(){
		return (
		   <section>
		   	<h1 className="title">Aktionen</h1>
		   	<OwlCarousel ref="car" options={options}>
			    <div><img src={bewebungsbilderPromotion01 } alt="The Last of us"/></div>
			    <div><img src={bewebungsbilderPromotion01 } alt="GTA V"/></div>
			    <div><img src={bewebungsbilderPromotion01 } alt="Mirror Edge"/></div>
			</OwlCarousel>
		
		   </section>
		   
		);
	}
}



export default PromotionCarousel;


// <OwlCarousel ref="car" options={options} events={events} >



