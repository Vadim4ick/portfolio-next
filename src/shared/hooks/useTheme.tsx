"use client";

import { useContext } from "react";
import { Theme, ThemeProviderContext } from "../providers/ThemeProvider";

const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeProviderContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case "dark":
        newTheme = "light";
        break;
      case "light":
        newTheme = "dark";
        break;

      default:
        newTheme = "light";
        break;
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return {
    theme: theme || "light",
    toggleTheme,
  };
};

export { useTheme };
