import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  function changeTheme() {
    setTheme("Dark");
  }
  return (
    <div>
      <button
        onClick={changeTheme}
        className="bg-gray-400 text-white m-4 px-4 py-3 rounded"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Button;
