import { useContext } from "react";

import CartContext from "../../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } =
    useContext(CartContext);
console.log(cart);

  const total = cart.items.reduce(
    (sum, item) => sum + item.rate * item.qty,
    0
  );

  if (!cart.items.length) {
    return (
      <div className="p-5 text-xl">
        Cart Empty
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Cart Page
      </h1>

      <div className="space-y-5">
        {cart.items.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />

              <div>
                <h2 className="font-bold text-lg">
                  {item.title}
                </h2>

                <p>{item.description}</p>

                <p className="font-bold">
                  {/* ₹ {item.rate} */}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                removeFromCart(item._id)
              }
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-5">
        {/* Total: ₹ {total} */}
      </h2>
    </div>
  );
};

export default CartPage;