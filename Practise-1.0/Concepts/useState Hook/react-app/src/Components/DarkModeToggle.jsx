import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        // Add dark mode classes
        document.body.classList.add("bg-gray-800", "text-white");
        document.body.classList.remove("bg-white", "text-black");
      } else {
        // Add light mode classes
        document.body.classList.add("bg-white", "text-black");
        document.body.classList.remove("bg-gray-800", "text-white");
      }
      return newMode;
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center transition-all duration-300">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold mb-6">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </h2>
        <button
          onClick={toggleMode}
          className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {isDarkMode ? (
            <FaSun className="w-6 h-6 mr-2" />
          ) : (
            <FaMoon className="w-6 h-6 mr-2" />
          )}
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

export default DarkModeToggle;
