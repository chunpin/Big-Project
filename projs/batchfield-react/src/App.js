import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';



import HomePage from './pages/HomePage';
import FotoShootingsDetailPage from './pages/FotoshootingsDetailPage';
import TeamPage from './pages/TeamPage';
import KontaktPage from './pages/KontaktPage';
import FotoshootingsPreisePage from './pages/FotoshootingsPreisePage';






import Nav from './components/Nav';
import Footer from './components/Footer';


import SocialShare from './components/SocialShare';


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
          <Nav data={data.companyInfo}/>
             <Route exact path="/" component={HomePage}/>
             <Route exact path="/fotoshootings_preise" component={FotoshootingsPreisePage}/>
             <Route exact path="/team" component={TeamPage}/>
             <Route exact path="/kontakt" component={KontaktPage}/>
             <Route exact path="/fotoshootings_preise/:topicId" component={Topic}/>
          <SocialShare />
          <Footer data={data} />
        </div>
      </Router>
    );
  }
}

export default App;

