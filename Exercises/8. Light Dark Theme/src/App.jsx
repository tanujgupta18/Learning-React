import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <p className="text-2xl font-bold">Hello World!</p>
        <button
          onClick={handleToggleTheme}
          className="mt-4 px-6 py-2 rounded-lg border border-gray-700 bg-gray-200 dark:bg-gray-700 dark:border-gray-500 text-black dark:text-white transition-colors"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default App;
