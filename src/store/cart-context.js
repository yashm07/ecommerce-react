import React from "react";

const CartContext = React.createContext({
  items: [],
  subAmount: 0,
  taxAmount: 0,
  shippingAmount: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
