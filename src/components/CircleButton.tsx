
import './CircleButton.scss';
import { CloseIcon } from '@chakra-ui/icons';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';

/* takes in link and type */
function CircleButton (props) { 
  return(
    <a href={props.link}>
      <div className={`circle-button-contain ${props.type}`}>
        {props.type === 'cross' && (
          <CloseIcon boxSize={3} />
        )}
        {props.type === 'info' && (
          <MoreHorizIcon fontSize={'medium'} />
        )}
        {props.type == 'arrow' && (
          <>
            <ChevronRightIcon boxSize={25} />
          </>

        )}

      </div>
    </a>
  );
};




export default CircleButton;

