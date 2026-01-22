import CircleButton from "./CircleButton";
import "./Header.scss";

interface HeaderProps {
  page: string;
}

function Header({ page }: HeaderProps) {
  const handleClose = () => {
    // Close the extension popup
    window.close();
  };

  return(
    <div className='header-contain'>
      <div className='left'>
        <h3>hey! it's enchir</h3>
        <p>{page}</p>
      </div>
      <div className='right'>
        <CircleButton type='cross' onClick={handleClose} />
      </div>
    </div>
  );
};

export default Header;