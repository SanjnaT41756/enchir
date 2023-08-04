import './Button.scss';
import React from 'react';

function Button (props) { 
  return(
    <a href={props.link}>
      <div className='button-contain container' title={props.type} >
        {props.text}
      </div>
    </a>
  );
};

export default Button;