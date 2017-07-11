import React, { Component } from 'react';


import './navbar.css';




class Navbar extends Component {
  render() {
    return (
       <nav id="nav">
     <div className="navmenu navmenu-default navmenu-fixed-right offcanvas">
      <a className="navmenu-brand" href="/index.html">Startseite</a>
      <ul className="nav navmenu-nav">
        <li><a href="/biometrische-passbilder-passfotos.html">Biometrische Passbilder</a></li>
        <li><a href="/visum-fotos.html">Visum-Fotos</a></li>
        <li><a href="/passbilder-schoene-portraits.html">QuickShot</a></li>
        <li><a href="/kundenstimmen.html">Kundenstimmen</a></li>
      </ul>
      <ul className="nav navmenu-nav">
        <li><a href="/kontakt.html">Kontakt</a></li>
       {/*  uncommend the code below to show up the dropdown menu */}

       {/*    <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
            <ul className="dropdown-menu navmenu-nav">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li className="dropdown-header">Nav header</li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li> 
        */}        
      </ul>
      <ul className="nav navmenu-nav">
        {/*
        <li>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.3758343654513!2d12.12524061601262!3d47.85168407920168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47761a39e2c62747%3A0x68fdc7ba19fb294!2sHammerweg%2C+83022+Rosenheim!5e0!3m2!1sen!2sde!4v1466576946172" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </li>
        */}
      </ul>
       <ul className="nav navmenu-nav">
        <li className="address">
           <a href="http://www.google.com"><span className="glyphicon glyphicon-map-marker">&nbsp;</span>Hammerweg 8
              83022 Rosenheim</a>
        </li>
        <li className="tel">
           <a href="tel:+49-08031-2214040"><span className="glyphicon glyphicon-earphone">&nbsp;</span>08031-2214040</a>
        </li>
      </ul>
    </div>

    <div className="navbar navbar-default navbar-fixed-top">
      <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu" data-canvas="body">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
  </nav>
    );
  }
}



export default Navbar;
