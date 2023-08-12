import CircleButton from "./CircleButton";
import "./Header.scss";

function Header(props) {
  const pageName = props.page;
  const handleClick = () => {
    window.close();
  }

  return(
    <div className='header-contain'>
      <div className='left'>
        <h3>enchir</h3>
        <p>{props.page}</p>
      </div>
      <div className='right'>
        <CircleButton link='enchir.info' type='info' />
        <CircleButton link='#' type='cross' onClick={handleClick} />
      </div>
    </div>
  );
};

export default Header;