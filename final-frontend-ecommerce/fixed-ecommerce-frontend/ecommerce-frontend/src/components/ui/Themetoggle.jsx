// src/components/ThemeToggle.jsx
import React from "react";
import { Button } from "../ui/button";

const ThemeToggle = ({ className = "" }) => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    if (isDark) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  };

  return (
    <Button
      size="sm"
      onClick={toggleTheme}
      className={className}
    >
      Switch Theme
    </Button>
  );
};

export default ThemeToggle;