console.log('Background service worker running')

// Track the current tab's HTTP status
let currentTabId: number | undefined;

// Function to show the popup
async function showPopup(tabId: number) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['js/content.js']
    });
    await chrome.tabs.sendMessage(tabId, { action: 'showPopup' });
  } catch (error) {
    console.error('Error showing popup:', error);
  }
}

// Update the current tab when it changes
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  currentTabId = activeInfo.tabId;
  await updateTabStatus(activeInfo.tabId);
});

// Update when the URL changes
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tabId === currentTabId) {
    const isHttp = await updateTabStatus(tabId);
    // Notify content script about HTTP status
    try {
      await chrome.tabs.sendMessage(tabId, { 
        action: 'UPDATE_HTTP_STATUS', 
        isHttpSite: isHttp 
      });
    } catch (error) {
      // Tab might not have content script injected yet
      console.log('Could not notify content script:', error);
    }
  }
});

// Check if the current tab is using HTTP
async function updateTabStatus(tabId: number): Promise<boolean> {
  try {
    const tab = await chrome.tabs.get(tabId);
    if (tab?.url) {
      const isHttp = tab.url.startsWith('http://');
      await chrome.storage.local.set({ 
        isHttpSite: isHttp, 
        currentUrl: tab.url 
      });
      
      if (isHttp) {
        console.log('HTTP site detected');
        await showPopup(tabId);
      }
      return isHttp;
    }
  } catch (error) {
    console.error('Error updating tab status:', error);
  }
  return false;
}

// Handle messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'OPEN_POPUP') {
    // Open the popup programmatically
    chrome.action.openPopup()
      .then(() => {
        console.log('Popup opened successfully');
      })
      .catch((error) => {
        console.error('Error opening popup:', error);
        // Fallback: Open the popup in a new tab
        if (sender.tab?.id) {
          chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            func: () => {
              window.open(chrome.runtime.getURL('js/index.html'), '_blank', 'width=400,height=600');
            }
          });
        }
      });
    return true; // Keep the message channel open for async response
  }
  return false;
});

// Initialize with the current tab
chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
  if (tabs[0]?.id) {
    currentTabId = tabs[0].id;
    await updateTabStatus(tabs[0].id);
  }
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['js/content.js']
    });
  }
});

export {};