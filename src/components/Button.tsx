import './Button.scss';
import React from 'react';

function Button (props) { 
  return(
    <a href={props.link}>
      <div className= {`button-contain container ${props.type}`} >
        {props.type === 'yes' && (
          "yes please!"
        )}
        {props.type === 'no' && (
          "no thank you."
        )}
        {props.type === 'default' && (
          props.text
        )}
      </div>
    </a>
  );
};

export default Button;