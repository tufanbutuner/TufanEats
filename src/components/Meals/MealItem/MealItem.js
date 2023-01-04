import React from "react";
import "./MealItem.css";

export default function MealItem({ name, description, price }) {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div></div>
    </li>
  );
}
