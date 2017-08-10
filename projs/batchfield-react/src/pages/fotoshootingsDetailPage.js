import React, { Component } from 'react';

import slugify from 'slugify';

import './testing.css';



class Testing extends Component {
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
    

      <div className="col s12 m6 image_wrapper">
        <img className="responsive-img" src="/images/hochzeit/batchfield_fotograf_rosenheim_hochzeit_07.jpg" alt="batchfield fotograf rosenheim hochzeit 07.jpg" />
      </div>
  
      
  
      <div className="col s12 m6 list_wrapper">
          <ul>
            <li>Euer Lieblingsfoto ist im Preis bereits enthalten: als Abzug + Datei.</li>
            <li>Ca. 60 Minuten solltet ihr für das Familien Shooting und eure Bildauswahl einplanen.</li>
            <li>Bei uns gibt es keine Abnahmeverpflichtung! Ihr habt die Wahl – bestellst nur die Fotos, die ihr wirklich haben möchtet.</li>
            <li>Ab 7 Personen kostet das Fotoshooting 59€</li>
            <li className="last center" id="last_bullet_links"></li>
          </ul>  
      </div>
   </div>
  </div>
</div>
)
  }
}





class FotoShootingsDetailPage extends Component {
  filterData(){
    var param = this.props.param;
    var data = this.props.data;
    var topic = data.filter((item) => item.title.toLowerCase().replace("ä", "a") === param )
    return topic[0];
  }


	render(){
		return (
      <div> 
        <Testing data={this.filterData()}/>
      </div>
		);
	}
}

export default FotoShootingsDetailPage;

