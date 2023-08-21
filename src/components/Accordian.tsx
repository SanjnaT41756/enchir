import './Accordian.scss';
import { useState } from 'react';
import arrowClosed from '../assets/images/arrow_closed.png';
import arrowOpened from '../assets/images/arrow_opened.png';

function Accordian({items}) {

  const[activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
    ;
  }

  return(
  <div>
    {items.map((item, index) => (
      <p className={index === activeIndex ? 'desc-text clicked' : 'desc-text'} key={item.name}>
        <button className='button' onClick={() => handleClick(index)}>
          <div className={index === activeIndex ? 'icon-open' : 'icon-close'}><div>{ index === activeIndex ? '>' : 'v' }</div></div>{item.name}</button>
        {index === activeIndex && <p className={index === activeIndex ? 'desc-text-clicked' : 'desc-text'}>{item.content}</p>}
      </p>
    ))}
  </div>
  );
}

export default Accordian;