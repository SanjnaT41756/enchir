
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'open_popup') {
      chrome.windows.create({
        url: 'popup.html',
        type: 'popup',
        width: 200,
        height: 300,
      });
    }
  });
  export {}

