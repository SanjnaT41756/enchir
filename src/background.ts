console.log('background executing')

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
    await updateTabStatus(tabId);
  }
});

// Check if the current tab is using HTTP
async function updateTabStatus(tabId: number) {
  try {
    const tab = await chrome.tabs.get(tabId);
    if (tab?.url) {
      const isHttp = tab.url.startsWith('http://');
      await chrome.storage.local.set({ 
        isHttpSite: isHttp, 
        currentUrl: tab.url 
      });
      
      if (isHttp) {
        console.log('HTTP site detected, showing popup');
        await showPopup(tabId);
      }
    }
  } catch (error) {
    console.error('Error updating tab status:', error);
  }
}

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