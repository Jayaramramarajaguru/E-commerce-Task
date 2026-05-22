import API from "../services/api";

import React, {
  createContext,
  useReducer,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();

  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  // FETCH CART
  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");

      dispatch({
        type: "SET_CART",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ADD TO CART
  const addToCart = async (product) => {
    try {
      console.log("PRODUCT", product);

      await API.post("/cart", {
        productId: product._id,

        title: product.title,

        image: product.image,

        description: product.description,

        price: product.price,

        qty: 1,
      });

      fetchCart();

      alert("Added To Cart");

      navigate("/cart");
    } catch (error) {
      console.log(
        error.response?.data || error
      );
    }
  };

  // REMOVE FROM CART
  const removeFromCart = async (id) => {
    try {
      await API.delete(`/cart/${id}`);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;