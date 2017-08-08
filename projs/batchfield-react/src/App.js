import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import HomePage from './pages/homePage.js';



import Navbar from './components/navBar.js';










class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
