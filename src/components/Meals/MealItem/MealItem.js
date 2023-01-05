import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

export default function MealItem({ name, description, price, id }) {
  const formattedPrice = `$${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id: id, name: name, amount: amount, price: price });
  };

  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
