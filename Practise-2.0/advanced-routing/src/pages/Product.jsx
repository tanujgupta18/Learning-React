import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link to="/product/men">Men's Collection</Link>
        <Link to="/product/women">Women's Collection</Link>
        <Link to="/product/kids">Kids Collection</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
