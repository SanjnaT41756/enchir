import CircleButton from "./CircleButton";
import "./Header.scss";

function Header(props) {
  const pageName = props.page;

  return(
    <div className='header-contain'>
      <div className='left'>
        <h3>hey! it's enchir</h3>
        <p>{props.page}</p>
      </div>
      <div className='right'>
        <CircleButton link='#/G4' type='cross'/>
      </div>
    </div>
  );
};

export default Header;