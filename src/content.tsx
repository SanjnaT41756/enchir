
console.log('i am here')

//import enchirNeutral from "../dist/js/images/enchirNeutral.png"
//const button = document.createElement('button');
const button = document.createElement('img');
//button.textContent = 'Click Me';
button.style.width = '50px';
button.style.height = '50px';
//button.style.borderRadius = '50%';
//button.style.backgroundColor = 'brown';
//button.style.color = 'white';
button.style.border = 'none';
button.style.position = 'fixed';
button.style.cursor = 'pointer';
button.style.top = '50%';
button.style.right = '0';
button.style.transform = 'translateY(-50%)';
button.style.zIndex = '9999';
//button.src = enchirNeutral;

button.src = chrome.runtime.getURL("js/images/enchirNeutral.png");
// Append the button to the body
document.body.appendChild(button);


import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup';
import { HashRouter as Router} from 'react-router-dom';


let isComponentVisible = false;
let container; // Store the container reference


function createContainer() {
  if (!container) {
    container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '50px'; // Adjust as needed
    container.style.right = '20px'; // Adjust as needed
    container.style.zIndex = '9999'; // Make sure it's above other content
    document.body.appendChild(container);
  }
}


// Add a click event listener to the button
button.addEventListener('click', () => {
  console.log('Button clicked'); 
  if (!isComponentVisible) {
    createContainer();
    // Render your React component into the container
    ReactDOM.render(
        <Router> <Popup /> </Router>, container
    );
    isComponentVisible = true;

  } 
  else {
    // Unmount the React component and remove the container
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null; // Reset the container reference
    isComponentVisible = false;
  }
});



