import React from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
