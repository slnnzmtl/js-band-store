import CartButton from "../CartButton/CartButton";
import "./Header.scss";

const Header = () => {

  return (
    <div className="header">
      <div className="header__container">
        <span className="header__title">JS Band Store</span>
        <CartButton />
      </div>
    </div>
  )
};


export default Header;