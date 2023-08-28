console.log('background executing')
chrome.action.onClicked.addListener((tab) => {
    if (tab && tab.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.bundle.js'], // Adjust the filename accordingly
      });
    }
  });
  
  export{}