
import './CircleButton.scss';
import React from 'react';

function CircleButton (props) { 

  return(
    <a href={props.link}>
      <div className={`circle-button-contain container ${props.type}`}>
        {props.type === 'cross' && (
          <>
            <span className="cross-line1"></span>
            <span className="cross-line2"></span>
          </>
        )}
        {props.type === 'info' && (
          <>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </>
        )}

      </div>
    </a>
  );
};




export default CircleButton;

