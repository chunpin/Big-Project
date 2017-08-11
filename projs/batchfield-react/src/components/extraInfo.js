import React, { Component } from 'react';

import './extraInfo.css';


class ExtraInfo extends Component {

  populateHtml(){
    var extraInfo = this.props.data;
    console.log('extraInfo',extraInfo);
    const html = extraInfo.map(function (item){
      return (
        <li className="col s12 m6">
          <div className="icon-block">
            <h2 className="center brown-text"><img src="/images/tipps_icon_kidspullover.png" alt={`${item.icon}_icon`}/></h2>
            <p className="light">{item.desc}</p>
          </div>
        </li>
      );
    });


    return html;
  }


  
	render(){
		return (
       <section className="section description">
        <div className="container">
          <div className="row">
        <div className="col s12 center">
          <h3 className="light-blue-text text-lighten-1">Tipps für 
            {` ${this.props.title}`}
          </h3>
        </div>
        

        <ul>
            {this.populateHtml()}
        </ul>

          </div>
        </div>
      </section>
		);
	}
}

export default ExtraInfo;

