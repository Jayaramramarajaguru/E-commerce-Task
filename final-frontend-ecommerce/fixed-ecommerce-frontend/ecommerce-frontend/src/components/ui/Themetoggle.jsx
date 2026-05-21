<<<<<<< HEAD
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

=======
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

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
export default ThemeToggle;