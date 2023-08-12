import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import Stars from "../components/Stars";
import Header from "../components/Header";
import LinkBar from "../components/LinkBar";
import enchirNeutral from '../assets/images/enchirNeutral.png';

import './Tutorial_1.scss';

function Tutorial_1() {
  return(
    <div className='page-contain'> 
      <Header className='header' page='welcome to enchir' />
      <section className='content'>
        <h2>hey there!</h2>
        <img className='enchir-icon' src={enchirNeutral} alt='enchir neutral icon' />
        <div className='desc'>
            <h2> i'm enchir, </h2>
            <p>your personal web exploring buddy</p>
        </div>
      </section>
      <Button type='default' link='#' text='learn more' />
      {/* <Button type='yes' link='/home' text='insert text' />
      <CircleButton type="cross" link='/home' />
      <CircleButton type="info" link='/home' />
      <CircleButton type="arrow" link='/home' />
      <Stars/>
      <Header page="insert text" />
      <LinkBar /> */}

    </div>
  )
}

export default Tutorial_1