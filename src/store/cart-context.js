import React from "react";

const CartContext = React.createContext({
  items: [],
  subAmount: 0,
  taxAmount: 0,
  shippingAmount: 0,
  totalAmount: 0,
  image: "",
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
