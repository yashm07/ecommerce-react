import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  subAmount: 0,
  taxAmount: 0,
  shippingAmount: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // pricing panel
    const updatedSubAmount =
      state.subAmount + action.item.price * action.item.amount;

    let updatedShippingAmount;
    if (updatedSubAmount === 0) {
      updatedShippingAmount = 0;
    } else {
      updatedShippingAmount = 10;
    }

    const updatedTaxAmount = updatedSubAmount * 0.13;

    const updatedTotalAmount =
      updatedSubAmount + updatedShippingAmount + updatedTaxAmount;

    // adding cart items
    const existingItemIndex = state.items.findIndex(
      (cartitem) => cartitem.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      subAmount: updatedSubAmount,
      taxAmount: updatedTaxAmount,
      shippingAmount: updatedShippingAmount,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (cartitem) => cartitem.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    // pricing panel
    const updatedSubAmount = state.subAmount - existingItem.price;

    let updatedShippingAmount;
    if (updatedSubAmount === 0) {
      updatedShippingAmount = 0;
    } else {
      updatedShippingAmount = 10;
    }

    const updatedTaxAmount = updatedSubAmount * 0.13;

    const updatedTotalAmount =
      updatedSubAmount + updatedShippingAmount + updatedTaxAmount;
    //   removing cart items
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      subAmount: updatedSubAmount,
      taxAmount: updatedTaxAmount,
      shippingAmount: updatedShippingAmount,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Add items to cart
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  // Remove items from cart
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    subAmount: cartState.subAmount,
    taxAmount: cartState.taxAmount,
    shippingAmount: cartState.shippingAmount,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
