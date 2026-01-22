import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import Stars from "../components/Stars";
import Header from "../components/Header";
import LinkBar from "../components/LinkBar";
import enchirNeutral from '../assets/images/enchirNeutral.png';

import './Tutorial_1.scss';

function Tutorial_1() {
  return(
    <div className='page-contain tut-1'> 
      <Header page='welcome to enchir' />
      <section className='content'>
        <div className='text-content'>
          <div className='desc'>
            <p className='desc-text'>your personal web exploring buddy</p>
          </div>
        </div>
        <div className='image-container'>
          <img className='enchir-icon' src={enchirNeutral} alt='enchir neutral icon' />
        </div>
      </section>
    </div>
  )
}

export default Tutorial_1;