import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useNavigate } from "react-router-dom";

import useAuth from "@/Carts/useAuth";

const registerSchema = z.object({
  name: z.string().min(2),

  email: z.string().email(),

  password: z.string().min(6),

  role: z.enum(["user", "admin"]),
});

const Register = () => {
  const navigate = useNavigate();

  const { registerMutation } = useAuth();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    registerMutation.mutate(data, {
      onSuccess: () => {
        alert("Registration successful!");

        navigate("/login");
      },

      onError: (err) => {
        console.log(
          err.response?.data?.message
        );
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4"
      >
        <h1 className="text-2xl font-bold">
          Register
        </h1>

        <div>
          <Input
            placeholder="Name"
            {...formRegister("name")}
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Input
            placeholder="Email"
            {...formRegister("email")}
          />

          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            {...formRegister("password")}
          />

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* ROLE SELECT */}

        <div>
          <select
            {...formRegister("role")}
            className="w-full border rounded px-3 py-2 dark:bg-gray-800"
          >
            <option value="user">
              user
            </option>

            <option value="admin">
              admin
            </option>
          </select>

          {errors.role && (
            <p className="text-red-500 text-sm">
              {errors.role.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending
            ? "Registering..."
            : "Register"}
        </Button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <button
            type="button"
            className="text-blue-600 underline"
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;