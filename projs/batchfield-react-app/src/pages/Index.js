
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








class TopicDetailPage extends Component {
  render() {
    return (
        <div> here is the topic detail page</div>
    );
  }



}

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


const TopicData = {
  familie:{
    id:"familie",
    title: "Familie",
    sub_title: "Fotoshooting für deine Familie",
    price: 39,
  },
  kids:{
    id:"kids",
    title: "Kids",
    sub_title: "das Shooting für Babies & Kinder",
    price: 39,
  },
  baby_bauch:{
    id:"baby_bauch",
    title: "Baby Bauch",
    sub_title: "Wir freuen uns auf dich!",
    price: 39,
  },
  paerchen:{
    id:"paerchen",
    title: "Pärchen",
    sub_title: "just the two of us ",
    price: 39,
  },
  beauty:{
    id:"beauty",
    title: "kinder",
    sub_title: "Styling, Make-Up & Du",
    price: 39,
  },
  kinder:{
    id:"kinder",
    title: "kinder",
    sub_title: "as Shooting für Babies & Kinder",
    price: 39,
  },
 }











const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <TopicDetailPage topic={match.params.topicId}/>
  </div>
)








const Index = () => (
  <Router>
    <div>
     <InfoNav />
     <MainNav
       links={TopicData}
      />

     <LandingPromotion />
     <Topics />
     {/*<Route path={`/:topicId`} component={Topic}/>*/}
     <Route path= {`/fotoshootings_preise/:topicId`} component={Topic}/>
    </div>
  </Router>
)


export default Index;