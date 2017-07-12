
import React, { Component } from 'react';

import InfoNav from '../components/InfoNav.js';
import MainNav from '../components/MainNav.js';
import LandingPromotion from '../components/LandingPromotion.js';
import Topics from '../components/Topics.js';



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



import Webflow from 'webflow-api';










/*
class WebflowComponent extends Component {

  fetchWebflowData (){
    // Initialize the API
    const api = new Webflow({ token: '1af2ee38b61d57311de081f11bc4df91520f8dee43b71ff76543a52d7cd8629b' });

  // Fetch a site
    api
    .site({ siteId: 'batchfield-official-website' })
    .then(site => console.log('site',site));




  }

  render() {
    return (
        <div> 
          <h1> 
            here is the webflow component 
          </h1>
          <div> {this.fetchWebflowData()}</div>
        </div>


    )
  }


}
*/





const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)








const Index = () => (
  <Router>
    <div>
     <InfoNav />
     <MainNav />
     <LandingPromotion />
     <Topics />
     {/*<Route path={`/:topicId`} component={Topic}/>*/}
     <Route path= {`/fotoshootings_preise/:topicId`} component={Topic}/>
    </div>
  </Router>
)


export default Index;