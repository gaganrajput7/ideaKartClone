import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
// import { product } from "./product";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();






const Cart = () => {
  // const [item, setItem] = useState(products);
  const product=JSON.parse(localStorage.getItem("product"))||[];

  const initialState = {
    item: product,
    totalAmount: 0,
    totalItem: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    // product=product.splice(id,1);
    // console.log(product);
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    localStorage.removeItem("product");
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
