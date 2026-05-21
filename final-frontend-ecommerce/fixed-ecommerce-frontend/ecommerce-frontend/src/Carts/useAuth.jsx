
import API from "../services/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      const u = localStorage.getItem("user");
      return token && u ? JSON.parse(u) : null;
    },
  });

  const loginMutation = useMutation({
    mutationFn: (data) => API.post("/auth/login", data),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      queryClient.setQueryData(["user"], res.data.user);
      navigate("/");
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data) => API.post("/auth/register", data),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      queryClient.setQueryData(["user"], res.data.user);
      navigate("/");
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    queryClient.setQueryData(["user"], null);
    navigate("/login");
  };

  return { user, loginMutation, registerMutation, logout };
};

export default useAuth;