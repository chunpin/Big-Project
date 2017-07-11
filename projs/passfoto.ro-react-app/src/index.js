import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';



import './fonts/bootstrap/glyphicons-halflings-regular.eot';
import './css/main.css';



import * as firebase from 'firebase';
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlecrFoKUM6JnQIkK8YF10YudoWBj34t0",
    authDomain: "passfoto-a124d.firebaseapp.com",
    databaseURL: "https://passfoto-a124d.firebaseio.com",
    projectId: "passfoto-a124d",
    storageBucket: "passfoto-a124d.appspot.com",
    messagingSenderId: "758497016491"
  };
  
  firebase.initializeApp(config);






// /scripts/jquery.min.js
// /scripts/bootstrap.min.js
// /scripts/custom/transition.js
// /scripts/custom/offcanvas.js
// /scripts/include.js
// /scripts/angular.min.js
// /scripts/app.js



// import './fonts/roboto/Roboto-Thin.woff2';
// import './css/materialize.css';
// import './js/materialize.js';



render(<App />, document.getElementById('root'));
registerServiceWorker();



// function formatName(user) {
// 	// check if there's data in the user object
// 	if(Object.keys(user).length === 2){
// 		return user.firstName + ' ' + user.lastName;
// 	} else {
// 		return ('there no data');	
// 	}
 
// }


// function getGreeting(user) {
//   if (user) {
//     return <h3>Hello, {formatName(user)}!</h3>;
//   }
//   return <h3>Hello, Stranger.</h3>;
// }


// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };



// const element = (
// 	<div>
// 	  <h1>
// 	    Hello, {formatName(user)}!
// 	  </h1>
// 		 greeting to :{getGreeting(user)}	
// 	</div> 
// );

// render(
//   element,
//   document.getElementById('root')
// );




