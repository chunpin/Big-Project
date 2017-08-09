import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import HomePage from './pages/homePage.js';



import Nav from './components/nav.js';

import FooterComponent from './components/footerComponent.js';


import data from './assets/data.js';









class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav data={data}/>
        <HomePage />
        <FooterComponent data={data} />
      </div>
    );
  }
}

export default App;
