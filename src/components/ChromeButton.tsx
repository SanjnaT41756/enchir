import './ChromeButton.scss';
import enchirNeutral from '../assets/images/enchirNeutral.png';

function ChromeButton (props) { 
  const handleClick = () => {
    alert('enchir af');
  }
  return(
    <img
      className='extension-button'
      src={enchirNeutral}
      alt='Enchir-Button'
      onClick={handleClick}
    />
  );
};

export default ChromeButton;