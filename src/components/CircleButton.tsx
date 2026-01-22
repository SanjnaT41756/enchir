
import './CircleButton.scss';
import { CloseIcon } from '@chakra-ui/icons';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';

interface CircleButtonProps {
  type: 'cross' | 'info' | 'arrow';
  link?: string;
  onClick?: () => void;
}

function CircleButton({ type, link, onClick }: CircleButtonProps) { 
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
    // If no onClick handler is provided but we have a link, the default <a> behavior will work
  };

  return(
    <a href={link} onClick={handleClick}>
      <div className={`circle-button-contain ${type}`}>
        {type === 'cross' && (
          <CloseIcon boxSize={3} />
        )}
        {type === 'info' && (
          <MoreHorizIcon fontSize={'medium'} />
        )}
        {type === 'arrow' && (
          <ChevronRightIcon boxSize={25} />
        )}
      </div>
    </a>
  );
};




export default CircleButton;

