// Content script to detect HTTP sites

// Check if current page is using HTTP (not HTTPS)
const isHttp = window.location.protocol === 'http:';

// If on HTTP, store the information in chrome.storage
if (isHttp) {
  chrome.storage.local.set({ isHttpSite: true });
  
  // Also send a message to the background script
  chrome.runtime.sendMessage({ type: 'HTTP_SITE_DETECTED', url: window.location.href });
} else {
  chrome.storage.local.set({ isHttpSite: false });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'CHECK_HTTP_STATUS') {
    sendResponse({ isHttp: isHttp, url: window.location.href });
  }
  return true; // Required for async response
});

export {}