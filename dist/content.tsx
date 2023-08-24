
console.log('i am here')


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


const box = document.createElement('div');
box.style.width = '300px'; // Adjust the width as needed
box.style.height = '200px'; // Adjust the height as needed
box.id = 'popupBox';
box.style.position = 'absolute';
box.style.top = '50%';
box.style.right = '70px';
box.style.transform = 'translateY(-50%)';
box.style.backgroundColor = 'blue';
box.style.border = '1px solid gray';
box.style.borderRadius = '10px';
box.style.padding = '10px';
box.style.display = 'none'; // Hide the box initially


document.body.appendChild(button);
document.body.appendChild(box);


button.addEventListener('click', () => {
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
});













