import React, { Component } from 'react';
import slugify from 'slugify';




import PriceDetail from '../components/PriceDetail';
import ExtraInfo from '../components/ExtraInfo';
import FotoShootings from '../components/FotoShootings';
import FotoBuch from '../components/FotoBuch';


import data from '../assets/data.js';



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


        <FotoShootings/>

      </div>
		);
	}
}

export default FotoShootingsDetailPage;

