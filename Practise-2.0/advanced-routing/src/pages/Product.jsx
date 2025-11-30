import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link to="/product/men">Men's Collection</Link>
        <Link to="/product/women">Women's Collection</Link>
      </div>
      <h1>Product Page</h1>
    </div>
  );
};

export default Product;
