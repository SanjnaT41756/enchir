import React from 'react';
import './Tutorial_3.scss';
import Header from '../components/Header';
import Button from '../components/Button';
import enchirNeutral from '../assets/images/enchirNeutral.png';


function Tutorial_3() {
  return(
    <div className='page-contain tut-3'> 
      <Header className='header' page='using enchir' />
      <section className='content'>
        <div className='text-contain'>
          <h3>need help?</h3>
          <div className='desc'>
              <p className='desc-text'>enchir will always be at the right of your screen! whenever you need help, simply hover over the icon and enchir will be there.</p>
          </div>
        </div>
        <img className='enchir-icon' src={enchirNeutral} alt='enchir neutral icon' />
      </section>
      <div className='footer-button end'>
          <Button type='default' link='#/T2' text='back' />
        </div>
    </div>
  );
};

export default Tutorial_3