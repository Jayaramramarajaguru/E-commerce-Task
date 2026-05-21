// src/components/Navbar.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useAuth from "@/Carts/useAuth";


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow py-4 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => navigate("/")}
            className="text-xl font-bold"
          >
            ClothStore
          </button>
          {user && user.role === "admin" && (
            <button
              onClick={() => navigate("/admin")}
              className="text-sm underline"
            >
              Admin
            </button>
          )}
        </div>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {user ? (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="link" size="sm" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate("/register")}>
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;