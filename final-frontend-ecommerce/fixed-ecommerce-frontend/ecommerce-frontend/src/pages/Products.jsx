import { useEffect, useState, useContext } from "react";

import API from "../services/api";

import CartContext from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

const fetchProducts = async () => {
  try {
    const res = await API.get("/products");

    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {products.map((product) => (
        <div
          key={product._id}
          className="border p-4 rounded-xl shadow"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover rounded"
          />

          <h2 className="text-xl font-bold mt-3">
            {product.title}
          </h2>

          <p>{product.description}</p>

          <p className="font-bold mt-2">
            ₹ {product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 rounded mt-3"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;