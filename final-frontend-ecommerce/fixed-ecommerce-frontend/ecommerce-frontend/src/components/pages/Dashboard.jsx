// src/pages/Dashboard.jsx
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useNavigate } from "react-router-dom";
import useProducts from "@/Carts/useProduct";

const Dashboard = () => {
  const navigate = useNavigate();
  const { createProduct, deleteProduct } = useProducts();
  const [form, setForm] = useState({
    title: "",
    description: "",
    rate: "",
    discount: "",
    clothType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct.mutate({ ...form, rate: Number(form.rate), discount: Number(form.discount) });
    setForm({ title: "", description: "", rate: "", discount: "", clothType: "" });
  };

  const handleDelete = (id) => {
    deleteProduct.mutate(id);
  };

  const { products, isLoading } = useProducts();
  console.log(products,"productsss");
  

  if (isLoading) return <div className="p-4">Loading products...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-4">Add Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <Input
            name="rate"
            type="number"
            placeholder="Rate"
            value={form.rate}
            onChange={handleChange}
            required
          />
          <Input
            name="discount"
            type="number"
            placeholder="Discount (%)"
            value={form.discount}
            onChange={handleChange}
          />
          <Input
            name="clothType"
            placeholder="Cloth Type"
            value={form.clothType}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
          required
        />
        <Button type="submit" className="mt-4" disabled={createProduct.isPending}>
          {createProduct.isPending ? "Adding..." : "Add Product"}
        </Button>
      </form>

      <div className="space-y-2">
        {products.map((p) => (
          <div
            key={p._id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{p.title}</p>
              <p>₹{p.rate}</p>
              <p>{p.clothType}</p>
            </div>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleDelete(p._id)}
              disabled={deleteProduct.isPending}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;