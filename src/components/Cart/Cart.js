import "./Cart.css";

export default function Cart() {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: "12.99" }];

  return (
    <div>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className="total">
        <span>Total amount</span>
        <span>35</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </div>
  );
}
