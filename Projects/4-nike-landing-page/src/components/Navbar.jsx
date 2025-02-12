import React from "react";
import brandLogo from "../assets/brand_logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full h-20 px-4 sm:px-16 py-4 items-center">
      <div className="logo w-auto">
        <img src={brandLogo} alt="Brand Logo" className="h-auto w-auto" />
      </div>
      <ul className="flex gap-4 uppercase font-semibold">
        <li>menu</li>
        <li>location</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <button className="bg-red-700 text-white px-5 py-1 font-semibold cursor-pointer">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
