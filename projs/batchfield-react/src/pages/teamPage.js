import React, { Component } from 'react';


import data from '../assets/data.js';


import Team from '../components/team.js';
import EverythingWeDo from '../components/everythingWeDo.js'



class TeamPage extends Component {


  render() {
    return (
      <div>
       <Team data= {data.team}/>
       <EverythingWeDo data = {data.companyInfo}/>
      </div>
    );
  }
}

export default TeamPage;