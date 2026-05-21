<<<<<<< HEAD
// src/pages/Login.jsx
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import useAuth from "@/Carts/useAuth";



const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const [formError, setFormError] = useState("");
  const { loginMutation } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
const onSubmit = (data) => {
  setFormError("");

  loginMutation.mutate(data, {
    onSuccess: (response) => {
      console.log("FULL RESPONSE", response);

      // axios data
      const resData = response?.data || response;

      console.log("RES DATA", resData);

      // save token
      localStorage.setItem("token", resData.token);

      // navigate
      if (resData?.user?.role === "user") {
        navigate("/products");
      }

      // admin navigate
      if (resData?.user?.role === "admin") {
        navigate("/admin");
      }
    },

    onError: (err) => {
      setFormError(
        err?.response?.data?.message || "Login failed"
      );
    },
  });
};
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {formError && <p className="text-red-500 mb-2">{formError}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            placeholder="Email"
            {...register("email")}
            className={`${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
            className={`${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </Button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            className="text-blue-600 underline"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

=======
// src/pages/Login.jsx
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import useAuth from "@/Carts/useAuth";



const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const [formError, setFormError] = useState("");
  const { loginMutation } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
const onSubmit = (data) => {
  setFormError("");

  loginMutation.mutate(data, {
    onSuccess: (response) => {
      console.log("FULL RESPONSE", response);

      // axios data
      const resData = response?.data || response;

      console.log("RES DATA", resData);

      // save token
      localStorage.setItem("token", resData.token);

      // navigate
      if (resData?.user?.role === "user") {
        navigate("/products");
      }

      // admin navigate
      if (resData?.user?.role === "admin") {
        navigate("/admin");
      }
    },

    onError: (err) => {
      setFormError(
        err?.response?.data?.message || "Login failed"
      );
    },
  });
};
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {formError && <p className="text-red-500 mb-2">{formError}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            placeholder="Email"
            {...register("email")}
            className={`${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
            className={`${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </Button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            className="text-blue-600 underline"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
export default Login;