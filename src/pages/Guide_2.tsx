import React from 'react';
import Header from '../components/Header';
import CircleButton from '../components/CircleButton';
import './Guide_2.scss';
function Guide_2(props) {
    return(
        <div className='page-contain g-2'> 
        <Header className='header' page= {props.header_text} />
            <div className = 'content'>
                <h3>topics I can help you with...</h3>
                <div className="button-and-text">
                    <CircleButton type='arrow' link='#/'  />
                    <h2> {props.o1} </h2>
                </div>
                <div className="button-and-text">
                    <CircleButton type='arrow' link='#/T2'  />
                    <h2> {props.o2}</h2>
                </div>
                <div className="button-and-text">
                    <CircleButton type='arrow' link='#/T3'  />
                    <h2> {props.o3}</h2>
            </div>
        </div>
      </div>
    );
 };

export default Guide_2