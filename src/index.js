//INDEX.JS - COMPILES OUR DIFFERENT COMPONENTS FROM APP.JS AND RENDERS INTO DOM

import React from 'react'; 
import { render } from 'react-dom'; //allows you to render our HTML into the DOM 
import App from 'components/app'; //imports our app.js file

render(<App />, document.getElementById('app')); //renders our app.js into the DOM