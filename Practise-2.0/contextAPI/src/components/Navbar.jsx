import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = (props) => {
  const data = useContext(ThemeDataContext);
  console.log(data);

  return (
    <div className="flex px-5 py-6 justify-between bg-cyan-600 w-full">
      <h2 className="text-3xl font-bold">Navbar</h2>
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;
