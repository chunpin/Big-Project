import React, { Component } from 'react';


import ExplanationLists from './explanationLists';


import './priceDetail.css';



class PriceDetail extends Component {


  titleStringTrasform(title){
    var concatString =  title.replace(" ","").replace("ä","a");
    var lowerString = concatString.toLowerCase(); 
    return lowerString;
  }


  render(){
    const data = this.props.data;
    return (
      <div className="section shadow_divider">
  <div className="container center topic_detail fixed_width">
    <div className="row">
     
      <div className="col s12 flex_wrapper">
         <h3 className="topic_title light-blue-text text-lighten-1">{data.title} Shooting</h3>

         <h2><p>{data.price} €</p></h2>
         
      </div>

      <h5 className="col s12 sub_header">{data.sub_title}</h5>
      <p className="col s12 sub_text">{data.page_desc}</p>
    

      <div className="col s12 m12 l6 image_wrapper">
        <img className="responsive-img featured-image" src={`/images/${this.titleStringTrasform(data.title)}/batchfield_fotograf_rosenheim_${this.titleStringTrasform(data.title)}_featured_image.jpg`} alt={data.title} />
      </div>
  
      
  
      <div className="col s12 m12 l6 list_wrapper">
         <ExplanationLists 
          items={data.explanation_lists}
         />
      </div>
   </div>
  </div>
</div>
)
  }
}




export default PriceDetail;