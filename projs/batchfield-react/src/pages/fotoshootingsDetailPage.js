import React, { Component } from 'react';

import slugify from 'slugify';

import PriceDetail from '../components/priceDetail.js';


import ExtraInfo from '../components/extraInfo.js';

import FotoShootings from '../components/fotoShootings.js';

import FotoBuch from '../components/fotoBuch.js';



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
        <PriceDetail data={this.filterData()}/>
        
        <FotoBuch />

        <ExtraInfo 
          data={this.filterData().extra_info}
          title = { this.filterData().title }
        />


        <FotoShootings />

      </div>
		);
	}
}

export default FotoShootingsDetailPage;

