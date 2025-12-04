import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./Header.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="header">
      <h1>Notes</h1>
      <span onClick={toggleTheme}>
        {theme === "light" ? (
          "🌙"
        ) : (
          "🌞"
        )}
      </span>
    </div>
  );
};
