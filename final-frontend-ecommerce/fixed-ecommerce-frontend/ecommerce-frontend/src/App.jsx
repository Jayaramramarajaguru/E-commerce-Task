import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/ui/Navbar";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import CartPage from "./components/pages/Cartpage";
import ThemeToggle from "./components/ui/Themetoggle";
import Home from "./components/pages/Home";

import useAuth from "./Carts/useAuth";
import AdminDashboard from "./pages/AdminDashboard";
import Products from "./pages/Products";

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/home" element={<Home />} />
=======
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" element={<Home />} />
>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />



      <Route
        path="/admin"
        element={
          user?.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Navbar />

          <div className="container mx-auto px-4 py-6">
            <AppRoutes />
          </div>

          <ThemeToggle className="fixed bottom-4 right-4" />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;