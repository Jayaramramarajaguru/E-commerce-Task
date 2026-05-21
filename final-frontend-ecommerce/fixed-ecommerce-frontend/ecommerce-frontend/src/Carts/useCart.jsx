// src/hooks/useCart.js
import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { io } from "socket.io-client";
import CartContext from "../context/CartContext";

const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const queryClient = useQueryClient();
  const socket = io(import.meta.env.VITE_API_URL.replace("/api", ""), {
    autoConnect: true,
  });

  const userId = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : null;

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
    const newCart = cart.items;
    if (userId) {
      socket.emit("joinCart", userId);
      socket.emit("cartUpdated", { userId, cart: newCart });
    }
    queryClient.setQueryData(["cart"], { items: newCart });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE", id });
    const newCart = cart.items;
    if (userId) {
      socket.emit("cartUpdated", { userId, cart: newCart });
    }
    queryClient.setQueryData(["cart"], { items: newCart });
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;