import Modal from "../UI/Modal";
import "./Cart.css";

export default function Cart({ onCloseCart }) {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: "12.99" }];

  return (
    <Modal onClose={onCloseCart}>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
          </div>
        ))}
      </ul>
      <div className="total">
        <span>Total amount</span>
        <span>35</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onCloseCart}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
}
