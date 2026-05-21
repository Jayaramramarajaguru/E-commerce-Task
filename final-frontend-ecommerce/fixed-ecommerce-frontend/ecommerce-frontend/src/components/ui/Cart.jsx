// src/componentsui/Cart.jsx
import { useContext } from "react";
import { Button } from "./button";
import CartContext from "../../context/CartContext";


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (!cart.items.length) return <p className="p-4">Cart empty</p>;

  const total = cart.items.reduce((sum, item) => sum + item.rate * item.qty, 0);

  return (
    <div className="w-full max-w-xs border rounded p-3 bg-white dark:bg-gray-800 shadow">
      <h2 className="font-bold mb-2">Cart</h2>
      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {cart.items.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                ₹{item.price} × {item.qty}
              </p>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => removeFromCart(item.id)}
            >
              ×
            </Button>
          </li>
        ))}
      </ul>
      <p className="font-bold mt-2 text-sm">Total: ₹{total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;