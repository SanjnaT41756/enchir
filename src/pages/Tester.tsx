import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import './Tester.scss';

function Tester() {
  return(
    <div className='tester-page-contain'>

      <Button type='yes' link='/home' text='insert text' />
      <CircleButton type="cross" link='/home' />
      <CircleButton type="info" link='/home' />
      <CircleButton type="arrow" link='/home' />

    </div>
  )
}

export default Tester