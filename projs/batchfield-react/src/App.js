import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';



import HomePage from './pages/homePage.js';
import FotoShootingsDetailPage from './pages/fotoshootingsDetailPage.js';



import Nav from './components/nav.js';
import Footer from './components/footer.js';


import data from './assets/data.js';








const Topic = ({ match }) => (
  <div>
    <FotoShootingsDetailPage 
     data={data.shootings} 
     param={match.params.topicId.split("_")[1].replace("-", " ").toLowerCase()}
     />
  </div>
)



//<Route path="/" component={HomePage}/>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav data={data}/>

             <Route exact path="/" component={HomePage}/>
             <Route exact path="/topic" component={Topic}/>
             <Route exact path={`/fotoshootings_preise/:topicId`} component={Topic}/>
          <Footer data={data} />
        </div>
      </Router>
    );
  }
}

export default App;
