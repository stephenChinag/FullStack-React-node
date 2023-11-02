import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  //Add item to Cart
  if (action.type === "ADD_ITEM") {
    //.. update the state to add meal Item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItems = state.items[existingCartItemIndex];

      const updatedItem = {
        ...existingItems,
        quantity: existingItems.quantity + 1,
      };
      // updating state in an inmutable way
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  // Remove Item from Cart
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItemIndex.quantity === 1) {
      updatedItems.splice(existingCartItemIndex);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, item: updatedItems };
  }
  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatCartAction({ type: "ADD_ITEM", item });
  };
  const removeItem = (id) => {
    dispatCartAction({ type: "REMOVE_ITEM", id });
  };
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
