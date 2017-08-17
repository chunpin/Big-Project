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
    return (
      <div className="section shadow_divider">
  <div className="container center topic_detail fixed_width">
    <div className="row">
     
      <div className="col s12 flex_wrapper">
         <h3 className="topic_title light-blue-text text-lighten-1">{this.props.data.title} Shooting</h3>

         <h2><p>39€</p></h2>
         
      </div>

      <h5 className="col s12 sub_header">Ein Moment für Euch</h5>
      <p className="col s12 sub_text">Mama, Papa und die Kinder – vielleicht nehmt ihr noch eure Großeltern mit.<br/>Egal wie viele ihr seid, wir freuen uns auf eure ganze Familie. Habt viel Spaß mit unserem Fotografenteam - in bester Wohlfühlatmosphäre.</p>
    

      <div className="col s12 m12 l6 image_wrapper">
        <img className="responsive-img featured-image" src={`/images/${this.titleStringTrasform(this.props.data.title)}/batchfield_fotograf_rosenheim_${this.titleStringTrasform(this.props.data.title)}_featured_image.jpg`} alt={this.props.data.title} />
      </div>
  
      
  
      <div className="col s12 m12 l6 list_wrapper">
         <ExplanationLists 
          items={this.props.data.explanation_lists}
         />
      </div>
   </div>
  </div>
</div>
)
  }
}




export default PriceDetail;