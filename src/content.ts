// Content script that will run on web pages

// Track HTTP status
let isHttpSite = false;

// Create and inject the button into the page
function injectButton() {
  // Create button element
  const button = document.createElement('button');
  button.id = 'enchir-extension-button';
  button.innerHTML = '🔍 Enchir';
  
  // Check initial HTTP status
  checkHttpStatus();
  
  // Style the button
  Object.assign(button.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '2147483647',
    padding: '10px 15px',
    backgroundColor: '#4a6bff',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s ease',
  });

  // Add hover effect
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#3a5bef';
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.25)';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#4a6bff';
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  });

  // Add click handler to open the popup
  button.addEventListener('click', async () => {
    try {
      // Remove warning state when clicked
      if (isHttpSite) {
        button.classList.remove('http-warning');
      }
      
      // Send message to background script to open the popup
      await chrome.runtime.sendMessage({ action: 'OPEN_POPUP' });
    } catch (error) {
      console.error('Error opening popup:', error);
      // Fallback: Open in a new tab if popup fails
      window.open(chrome.runtime.getURL('js/index.html'), '_blank', 'width=400,height=600');
    }
  });

  // Add the button to the page
  document.body.appendChild(button);
}

// Listen for HTTP status updates
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'UPDATE_HTTP_STATUS') {
    updateHttpWarning(message.isHttpSite);
  }
  return false;
});

// Check if current page is HTTP
function checkHttpStatus() {
  const isHttp = window.location.protocol === 'http:';
  updateHttpWarning(isHttp);
  return isHttp;
}

// Update button warning state
function updateHttpWarning(showWarning: boolean) {
  const button = document.getElementById('enchir-extension-button');
  if (!button) return;
  
  isHttpSite = showWarning;
  
  if (showWarning) {
    button.classList.add('http-warning');
  } else {
    button.classList.remove('http-warning');
  }
}

// Initialize the button when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectButton);
} else {
  injectButton();
}

// This empty export makes this a module
export {};
