import React, { Component } from 'react';

import Team from '../components/Team';
import EverythingWeDo from '../components/EverythingWeDo'


import data from '../assets/data.js';




function TeamPage(){
    return (
      <div>
       <Team data= {data.team}/>
       <EverythingWeDo info = {data.companyInfo}/>
      </div>
    );
}



export default TeamPage;







// class TeamPage extends Component {


//   render() {
//     return (
//       <div>
//        <Team data= {data.team}/>
//        <EverythingWeDo data = {data.companyInfo}/>
//       </div>
//     );
//   }
// }

// export default TeamPage;