import './LinkBar.scss';
import Button from './Button';

function LinkBar() {
    return(
      <div className='link-bar'>
        <h3>still have questions?</h3>
        <Button link='enchir.info' type='default' text='visit enchir.info'/>
      </div>
    );
  };
  
  export default LinkBar;