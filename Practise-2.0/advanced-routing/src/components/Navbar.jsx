import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-800 text-white px-8 py-4">
      <h2 className="text-3xl">React</h2>
      <div className="flex gap-8 text-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
