import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

export default function Cart({ onCloseCart }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeCartItem = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={onCloseCart}>
      <ul className="cart-items">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={removeCartItem.bind(null, item.id)}
            onAdd={addCartItem.bind(null, item)}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
}
