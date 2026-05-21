// src/Carts/useProducts.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";

const useProducts = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api.get("/products?page=1&limit=10");
      console.log("resgetproduct",res);
      
      return res.data.products;
    },
  });

  const createProduct = useMutation({
    mutationFn: (payload) => api.post("/products", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const updateProduct = useMutation({
    mutationFn: ({ id, payload }) => api.put(`/products/${id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const deleteProduct = useMutation({
    mutationFn: (id) => api.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return {
    products: data || [],
    isLoading,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProducts;