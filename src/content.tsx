
console.log('i am here')

const button = document.createElement('img');
button.style.width = '50px';
button.style.height = '50px';
button.style.border = 'none';
button.style.position = 'fixed';
button.style.cursor = 'pointer';
button.style.top = '50%';
button.style.right = '0';
button.style.transform = 'translateY(-50%)';
button.style.zIndex = '9999';
button.src = chrome.runtime.getURL("js/images/enchirNeutral.png");
// Append the button to the body
document.body.appendChild(button);


import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup';
import { HashRouter as Router} from 'react-router-dom';


function getCurrentUrl() {
  return window.location.href;
}

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
  const originalUrl = window.location.href;

  if (!isComponentVisible) {
    createContainer();

    // read and pass type based on website url
    const currentUrl = getCurrentUrl();
    console.log(currentUrl)

    let type;
    if (currentUrl.includes('login') || currentUrl.includes('signin') ||currentUrl.includes('sign-in') ||currentUrl.includes('log-in')){
      type = 'sign in';
    }
    else{
      type = 'cookie';
    }


    // Render your React component into the container
    ReactDOM.render(
        <Router> <Popup type={type}/> </Router>, container
    );
    isComponentVisible = true;
    // Save the original as data attribute
    document.body.setAttribute('data-original-url', originalUrl);

  } 
  else {
    // get original URL
    const originalUrl = document.body.getAttribute('data-original-url');

    // Use the history API to navigate back to the original URL
    window.history.pushState({}, '', originalUrl);
    // Unmount the React component and remove the container
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null; // Reset the container reference
    isComponentVisible = false;
  }
});



