// src/pages/Home.jsx
import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { useProducts } from "../hooks/useProducts";
import ProductCard from "../ui/Productcart";
import useProduct from "../../Carts/useProduct";



const Home = () => {
  const { products, isLoading, error } = useProduct();

  if (isLoading) return <div className="p-4">Loading products...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Clothing Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product._id} to={`/cart?product=${product._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;