import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

export default function HeaderCartButton({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
}
