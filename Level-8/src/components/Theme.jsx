import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-4 border-b bg-white dark:bg-gray-900 dark:text-white transition">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded"
      >
        {theme === "light" ? "Switch to Dark 🌙" : "Switch to Light ☀️"}
      </button>
    </div>
  );
};

export default Theme;
