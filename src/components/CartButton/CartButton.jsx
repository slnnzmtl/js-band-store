import icon from "../../assets/icons/cart.png";
import "./CartButton.scss";

const CartButton = () => (
  <div className="cart-button">
    <img src={icon} alt="Cart icon" className="cart-button__img" />
    <span className="cart-button__span">Cart</span>
    <span className="cart-counter cart-button__span">(3)</span>
  </div>
);

export default CartButton;