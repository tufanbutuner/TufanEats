import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

export default function MealItem({ name, description, price, id }) {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}
