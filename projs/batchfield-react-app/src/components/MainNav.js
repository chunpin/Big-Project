import React, { Component } from 'react';


class MainNav extends Component{
  render(){
    return (
        <nav className="white" role="navigation">
     <div className="nav-wrapper container">
      <a id="logo-container" href="/index.html" className="brand-logo"><img src="/images/batchfield_logo.png" alt="BATCHFIELD"/></a>


      <ul id="slide-out" className="side-nav">
        <li className="logo">
          <a href="/index.html" className="waves-effect waves-blue">
            <img src="/images/batchfield_logo.png" alt="BATCHFIELD"/>
          </a>
        </li>
        <li><a href="/fotoshootings_preise/index.html" className="waves-effect waves-blue">Shootings & Preise</a></li>
        <li><a href="/team/index.html" className="waves-effect waves-blue">Team</a></li>
        <li><a href="/kontakt/index.html" className="waves-effect waves-blue">Kontakt</a></li>
        <li><a href="termine_buchen.html" className="waves-effect waves-blue termin-button">Termine</a></li>
        <li><a href="/images/gutschein.png" target="_blank" className="waves-effect waves-blue">Gutschein</a></li>

        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header">Drop Me!<i className="mdi-navigation-arrow-drop-down"></i></a>
              <div className="collapsible-body">
                <ul>
                  <li><a href="/fotoshootings_preise/First" className="waves-effect waves-blue">First</a></li>
                  <li><a href="/fotoshootings_preise/Second" className="waves-effect waves-blue">Second</a></li>
                  <li><a href="/fotoshootings_preise/Third" className="waves-effect waves-blue">Third</a></li>
                  <li><a href="/fotoshootings_preise/Fourth" className="waves-effect waves-blue">Fourth</a></li>
                  <li><a href="/fotoshootings_preise/More" className="waves-effect waves-blue">More</a></li>
                  <li><a href="/fotoshootings_preise/More" className="waves-effect waves-blue">More</a></li>
                  <li><a href="/fotoshootings_preise/More" className="waves-effect waves-blue">More</a></li>
                  <li><a href="/fotoshootings_preise/More" className="waves-effect waves-blue">More</a></li>
                  <li><a href="/fotoshootings_preise/More" className="waves-effect waves-blue">More</a></li>
                  <li><a href="/fotoshootings_preise/More" className="waves-effect waves-blue">More</a></li>
                  <li><a href="/fotoshootings_preise/More" className="waves-effect waves-blue">More</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>      
      </ul>


      <ul className="left hide-on-med-and-down">


        <li><a href="/fotoshootings_preise/index.html" className="waves-effect waves-blue">Shootings & Preise</a></li>
        <li><a href="/team/index.html" className="waves-effect waves-blue">Team</a></li>
        <li><a href="/kontakt/index.html" className="waves-effect waves-blue">Kontakt</a></li>





        <li><a className="dropdown-button waves-effect waves-blue" href="#!" data-activates="dropdown1">PLANS & PRICING<i className="mdi-navigation-arrow-drop-down right"></i></a></li>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!" className="waves-effect waves-blue">First</a></li>
          <li><a href="#!" className="waves-effect waves-blue">Second</a></li>
          <li><a href="#!" className="waves-effect waves-blue">Third</a></li>
          <li><a href="#!" className="waves-effect waves-blue">Fourth</a></li>
        </ul>

      </ul>


      <ul className="right hide-on-med-and-down">

        <li><a href="termine_buchen.html" className="waves-effect waves-blue termin-button">Termine<span className="fa fa-calendar"></span></a></li>

       <li><a href="/images/gutschein.png" target="_blank" className="waves-effect waves-blue">Gutschein<span className="fa fa-gift"></span></a></li>

  

      </ul>


      <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
    </div>
  </nav>
    );
  }

}


export default MainNav;