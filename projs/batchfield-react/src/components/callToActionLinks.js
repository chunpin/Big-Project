import React, { Component } from 'react';



class CallToActionLinks extends Component {


  render(){
    return (
       <li className="last center" id="last_bullet_links">
            <a href="tel:+49-8031-8878777" className="button"><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;uns anrufen</a>
            <a href="/termin/index.html" className="button termin"><i className="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;Online Termin</a>
            <a href="/images/gutschein.png" target="_blank" className="button"><i className="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;Gutschein verschenken</a>
       </li>
    )
  }
}




export default CallToActionLinks;