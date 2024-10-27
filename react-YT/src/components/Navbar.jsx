import React, { useState } from "react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white pt-0 pb-[1.15rem] fixed inset-x-0 top-0">
      <div className="flex justify-between items-center max-w-[1257px] mx-auto px-6 h-16">
        <div className="logo">
          <a href="/">
            <img
              src="/images/grorapid.png"
              className="w-28 h-auto"
              alt="logo"
            />
          </a>{" "}
        </div>

        <ul className="flex justify-between gap-x-8 items-center">
          <li className="cursor-pointer">
            <a href="#">Home</a>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center">
              <span>Services</span>
              <svg
                className="ml-1 w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-72 bg-white rounded-md text-left py-2 border-none">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Webflow Development Services</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">HubSpot Services</a>
                </li>
              </ul>
            )}
          </li>

          {/* Products Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <div className="flex items-center">
              <span>Products</span>
              <svg
                className="ml-1 w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
            {isProductsOpen && (
              <ul className="absolute left-0 mt-2 w-64 bg-white rounded-md text-left py-2 border-none">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Services Store</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Design & Devlopment Store</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Grorapid Cold Emailing Suite</a>
                </li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer">
            <a href="#">Our Work</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">Insights</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">About Us</a>
          </li>

          <button className="text-white text-center bg-customBlue rounded-lg px-8 py-4 font-medium leading-none transition-all duration-[350ms] ease-in transform hover:scale-105 hover:shadow-lg hover:bg-customBlue2">
            Get free estimation
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
