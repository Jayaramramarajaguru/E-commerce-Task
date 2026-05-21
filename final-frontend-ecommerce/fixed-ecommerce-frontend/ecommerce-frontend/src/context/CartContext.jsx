import React, {
  createContext,
  useReducer,
  useEffect,
} from "react";

import axios from "axios";
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
const navigate=useNavigate();

  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  // FETCH CART
  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/cart"
      );

      dispatch({
        type: "SET_CART",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

const addToCart = async (product) => {
  try {
    console.log("PRODUCT", product);

    await axios.post(
      "http://localhost:4000/api/cart",
      {
        productId: product._id,

        title: product.title,
        
        image: product.image,

        description: product.description,

        price: product.price,

        qty: 1,
      }
    );

    fetchCart();

    alert("Added To Cart");
    navigate('/cart')
  } catch (error) {
    console.log(
      error.response?.data || error
    );
  }
};

  // REMOVE FROM CART
  const removeFromCart = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/cart/${id}`
      );

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