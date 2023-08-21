import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Accordian from '../components/Accordian';
import './Tutorial_2.scss';
function Tutorial_2() {
  const items = [
    {
      name: 'blah blah blah blah 0',
      content: 'lorem ipsum stuff'
    },
    {
      name: 'blah blah blah blah 1',
      content: 'lorem ipsum stuff'
    },
    {
      name: 'blah blah blah blah 2',
      content: 'lorem ipsum stuff'
    },
  ]
    return(
        <div className='page-contain tut-2'> 
        <Header className='header' page='welcome to enchir' />
        <section className='content'>
          <h3>as we explore the web together, i can help you:</h3>
          <Accordian items={items}/>
        </section>
        <div className='footer-button'>
          <Button type='default' link='#/' text='back' />
          <Button type='default' link='#/T3' text='next' />
        </div>
  
      </div>
    );
 };

export default Tutorial_2