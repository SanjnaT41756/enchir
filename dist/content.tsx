
console.log('i am here')

// const textElement = document.createElement('div');
// textElement.textContent = 'Hello from My Extension!';
// document.body.appendChild(textElement);

const button = document.createElement('button');
button.textContent = 'Click Me';
button.style.width = '50px';
button.style.height = '50px';
button.style.borderRadius = '50%';
button.style.backgroundColor = 'brown';
button.style.color = 'white';
button.style.border = 'none';
button.style.position = 'fixed';
button.style.cursor = 'pointer';
button.style.top = '50%';
button.style.right = '0';
button.style.transform = 'translateY(-50%)';
button.style.zIndex = '9999';
button.style.backgroundImage = `url(${chrome.runtime.getURL('enchirIcon.png')})`;


button.addEventListener('click', () => {
  alert('do not fear, enchir is here!');
});

document.body.appendChild(button);




