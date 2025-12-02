import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className="flex justify-end gap-7  w-full px-5 py-2 font-bold text-xl">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      {theme}
    </div>
  );
};

export default Nav2;
