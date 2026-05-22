// src/Carts/useProducts.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../services/api";

const useProducts = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await API.get("/products?page=1&limit=10");
      console.log("resgetproduct",res);
      
      return res.data.products;
    },
  });

  const createProduct = useMutation({
    mutationFn: (payload) => API.post("/products", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const updateProduct = useMutation({
    mutationFn: ({ id, payload }) => API.put(`/products/${id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const deleteProduct = useMutation({
    mutationFn: (id) => API.delete(`/products/${id}`),
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