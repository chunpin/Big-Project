import React, { Component } from 'react';

import './fotoShooting.css'; // Tell Webpack that Button.js uses these styles


import slugify from 'slugify';


// batchfield_fotograf_rosenheim_bewebungsbilder_featured_image.jpg




class FotoShoting extends Component {

  titleStringTrasform(title){
    var concatString =  title.replace(" ","").replace("ä","a");
    var lowerString = concatString.toLowerCase(); 
    return lowerString;
  }
  

	render(){
		var data = this.props.data;
		return (
			  <div className= {`col s6 m${data.column} l${data.column} center`}>
                      <div className="card">
                        <div className="card-image">
                          <a className="light-box-wrapper" href={`/fotoshootings_preise/fotostudio_${slugify(data.title).toLowerCase()}_fotograf_rosenheim.html`}>
                            <img src={`/images/${this.titleStringTrasform(data.title)}/batchfield_fotograf_rosenheim_${this.titleStringTrasform(data.title)}_featured_image.jpg`} alt={data.title} />
                            <span className="card-price-wrapper">
                              <div className="text-wrapper">
                                <p className="card-price">{data.price}</p>
                              </div>
                            </span>
                            <div className="overlay_background"><div className="overlay_title">{data.overlay_text? data.overlay_text : data.title}</div></div>
                          </a>
                        </div>
                        <div className="card-content">
                          <span className="card-title">{data.title}</span>
                          <p>{data.sub_title}</p>
                          </div>
                          <div className="card-action center">
                            <a href= {`/fotoshootings_preise/fotostudio_${slugify(data.title).toLowerCase()}_fotograf_rosenheim.html`} className="button">Preise & Infos</a>
                          </div>
                        </div>
                      </div>

		);
	}
}

export default FotoShoting;


//			<Col m={4} s={6}>
//				<Card classNameName='small'
//					header={<CardTitle image={`/images/${data.thumbnail}`}>{data.title}</CardTitle>}
//					actions={[<a href='#'>This is a Link</a>]}>
//					{data.sub_title}
//
//					<div> here is the overlay </div>
//				</Card>
//			</Col>



