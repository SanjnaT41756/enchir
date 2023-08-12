import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import Header from "../components/Header";
import LinkBar from "../components/LinkBar";
import './Tester.scss';

function Tester() {
  return(
    <div className='tester-page-contain'>

      <Button type='yes' link='/home' text='insert text' />
      <CircleButton type="cross" link='/home' />
      <CircleButton type="info" link='/home' />
      <CircleButton type="arrow" link='/home' />
      <Header page="insert text" />
      <LinkBar />

    </div>
  )
}

export default Tester