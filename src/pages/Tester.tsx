import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import './Tester.scss';

function Tester() {
  return(
    <div className='tester-page-contain'>
      <Button type='small' link='/home' text='button' />
      <CircleButton type="cross" link='/home' />
    </div>
  )
}

export default Tester