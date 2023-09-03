import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Stars from '../components/Stars';
//import enchirStar from '../assets/images/enchir_star.png';
import './Guide_4.scss';

function Guide_4(props) {
    return(
      <div className="box">
      <div className='page-contain g-4'> 
        <Header className='header' page= {props.header_text} />
        <section className = 'content'>
          <div className='left'>
            <h3>was this helpful?</h3>
            <p className='desc-text'>I value your opinion and would love the quality of my assistance!</p>
            <div className='rating'>
              <Stars />
              <Button link='#' type='default' text='submit rating' />
            </div>
          </div>
          <div className='right'>
            <img className='enchir-icon' src={chrome.runtime.getURL("js/images/enchir_star.png")} alt='Enchir starry-eyed icon.' />
          </div>
        </section>
        <div className='footer-button'>
          <h3>still have questions?</h3>
          <Button type='default' link='#' text='visit enchir.info' />
        </div>
      </div>
      </div>
    );
 };

export default Guide_4;