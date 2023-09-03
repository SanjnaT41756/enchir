import React from 'react';
import './Guide_3.scss';
import Header from '../components/Header';
import Button from '../components/Button';
// import cookie from '../assets/images/cookie.png';
// import lock from '../assets/images/lock.png'


function Guide_3(props) {
    let image; 

    if (props.type === 'cookie') {
      image = chrome.runtime.getURL("js/images/cookie.png");
    } else if (props.type === 'lock') { // can add more specific types
      image = chrome.runtime.getURL("js/images/lock.png");
    }
    


  return(
    <div className = "box">
    <div className='page-contain'> 
      <Header className='header' page={props.header_text} />
      <section className='content'>
      <div className = 'info'>
            <div className='text-contain'>
                <h3>what are {props.header_text} </h3>
                <div className='desc'>
                    <p className='desc-text'>
                        {props.content}
                    </p>
                </div>
            </div>
            <img className='icon' src={image} alt='content icon' />
        </div>


      </section>
        <div className='footer-button'>
          <Button type='default' link='#/G2' text='back' />
          <Button type='default' link='#/G4' text='next' />
        </div>
    </div>
    </div>
  );
};

export default Guide_3