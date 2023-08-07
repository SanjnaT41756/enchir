import Button from "../components/Button";
import './Tester.scss';

function Tester() {
  return(
    <div className='tester-page-contain'>

      <Button type='small' link='/home' text='insert text' />
      <CircleButton type="cross" link='/home' />
      <CircleButton type="info" link='/home' />

    </div>
  )
}

export default Tester