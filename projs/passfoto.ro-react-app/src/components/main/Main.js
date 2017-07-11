import React, { Component } from 'react';

import Hero from './hero/Hero.js';
import Tabs from './tabs/Tabs.js';
import HowItWorks from './howItWorks/HowItWorks.js';


class Main extends Component {
  render() {
    return (
    	<div>
    		<Hero />
    		<Tabs />
    		{/*<HowItWorks /> */}
    		<HowItWorks />
    	</div>
    );
  }
}



export default Main;


