import React, { Component } from 'react';

import slugify from 'slugify';

import PriceDetail from '../components/priceDetail.js';







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
      </div>
		);
	}
}

export default FotoShootingsDetailPage;

