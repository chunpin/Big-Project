import React, { Component } from 'react';

import './fotoShooting.css'; // Tell Webpack that Button.js uses these styles


import slugify from 'slugify';






function FotoShoting({data}){
  
   function titleStringTrasform(title){
    var concatString =  title.replace(" ","").replace("ä","a");
    var lowerString = concatString.toLowerCase(); 
    return lowerString;
   };

   return (
        <div className= {`col s6 m${data.column} l${data.column} center`}>
                      <div className="card">
                        <div className="card-image">
                          <a className="light-box-wrapper" href={`/fotoshootings_preise/fotostudio_${slugify(data.title).toLowerCase()}_fotograf_rosenheim.html`}>
                            <img src={`/images/${titleStringTrasform(data.title)}/batchfield_fotograf_rosenheim_${titleStringTrasform(data.title)}_featured_image.jpg`} alt={data.title} />
                            <span className="card-price-wrapper">
                              <div className="text-wrapper">
                                <p className="card-price">{`${data.price} €`}</p>
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



export default FotoShoting;





// class FotoShoting extends Component {

//   titleStringTrasform(title){
//     var concatString =  title.replace(" ","").replace("ä","a");
//     var lowerString = concatString.toLowerCase(); 
//     return lowerString;
//   }
  

//   render(){
//     var data = this.props.data;
//     return (
//         <div className= {`col s6 m${data.column} l${data.column} center`}>
//                       <div className="card">
//                         <div className="card-image">
//                           <a className="light-box-wrapper" href={`/fotoshootings_preise/fotostudio_${slugify(data.title).toLowerCase()}_fotograf_rosenheim.html`}>
//                             <img src={`/images/${this.titleStringTrasform(data.title)}/batchfield_fotograf_rosenheim_${this.titleStringTrasform(data.title)}_featured_image.jpg`} alt={data.title} />
//                             <span className="card-price-wrapper">
//                               <div className="text-wrapper">
//                                 <p className="card-price">{`${data.price} €`}</p>
//                               </div>
//                             </span>
//                             <div className="overlay_background"><div className="overlay_title">{data.overlay_text? data.overlay_text : data.title}</div></div>
//                           </a>
//                         </div>
//                         <div className="card-content">
//                           <span className="card-title">{data.title}</span>
//                           <p>{data.sub_title}</p>
//                           </div>
//                           <div className="card-action center">
//                             <a href= {`/fotoshootings_preise/fotostudio_${slugify(data.title).toLowerCase()}_fotograf_rosenheim.html`} className="button">Preise & Infos</a>
//                           </div>
//                         </div>
//                       </div>

//     );
//   }
// }

// export default FotoShoting;




