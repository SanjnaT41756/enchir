import CircleButton from "./CircleButton";
import "./Header.scss";

function Header(props) {
  const pageName = props.page;

  return(
    <div className='header-contain'>
      <div className='left'>
        <h3>enchir</h3>
        <p>{props.page}</p>
      </div>
      <div className='right'>
        <CircleButton link='enchir.info' type='info' />
        <CircleButton link='#/G4' type='cross'/>
      </div>
    </div>
  );
};

export default Header;