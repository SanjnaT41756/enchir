import React from 'react';
import enchirNeutral from '../assets/images/enchirNeutral.png'; // Import your image source

const ImageButtonComponent = () => {

  const handleClick = () => {
    alert('dont fear, enchir is here!');
  };

  return (
    <button onClick={handleClick}>
      <img src={enchirNeutral} alt="Image Button" />
    </button>
  );
};

export default ImageButtonComponent;
