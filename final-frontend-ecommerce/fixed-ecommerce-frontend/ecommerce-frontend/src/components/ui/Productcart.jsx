// src/components/ProductCard.jsx
import useCart from "@/Carts/useCart";
import { Button } from "./button";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded p-3 bg-white dark:bg-gray-800 shadow hover:shadow-md transition">
      <img
        src={product.image || "https://via.placeholder.com/200"}
        alt={product.title}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
      <p className="font-semibold">
        ₹{product.rate}
        {product.discount > 0 && (
          <span className="text-red-500"> ({product.discount}% off)</span>
        )}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{product.clothType}</p>
      <Button size="sm" className="mt-2 w-full" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;