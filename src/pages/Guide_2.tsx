import React from 'react';
import Header from '../components/Header';
import CircleButton from '../components/CircleButton';
import './Guide_2.scss';
function Guide_2(props) {
    return(
        <div className="box">
        <div className='page-contain g-2'> 
        <Header className='header' page= {props.header_text} />
            <div className = 'content'>
                <div className= 'left'>
                    <h3>topics I can help you with...</h3>
                    <div className="button-and-text">
                        <CircleButton type='arrow' link='#/G3'  />
                        <h2> {props.o1} </h2>
                    </div>
                    <div className="button-and-text">
                        <CircleButton type='arrow' link='#/G3'  />
                        <h2> {props.o2}</h2>
                    </div>
                    <div className="button-and-text">
                        <CircleButton type='arrow' link='#/G3'  />
                        <h2> {props.o3}</h2>
                    </div>
                </div>
        </div>
      </div>
      </div>
    );
 };

export default Guide_2