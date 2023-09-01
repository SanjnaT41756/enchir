import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import enchirWow from '../assets/images/enchir_wow.png';
import './Guide_1.scss';

function Guide_1(props) {
    return(
      <div className="box">
        <div className='page-contain g-1'> 
          <Header className='header' page= {props.header_text} />
          <section className = 'content'>
            <div className='left'>
              <h3>hey! it's enchir</h3>
              <p className='desc-text'>would you like to learn about cookies?</p>
            </div>
            <div className='right'>
              <img className='enchir-icon' src={enchirWow} alt='Alerted enchir icon.' />
            </div>
          </section>
          <div className='footer-button'>
            <Button type='default' link='#/' text='no thank you.' onClick={() => {window.close()}}/>
            <Button type='default' link='#/G2' text='yes please!' />
          </div>
        </div>
      </div>
    );
 };

export default Guide_1;