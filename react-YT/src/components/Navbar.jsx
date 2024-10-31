import React, { useState } from "react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className="bg-white pt-0 pb-[1.15rem] fixed inset-x-0 top-0 z-10">
      <div className="flex justify-between items-center max-w-[1257px] h-[67px] mx-auto px-6">
        <a href="/" aria-label="Homepage">
          <img
            src="/images/grorapid.png"
            className="w-[240px] max-w-full pl-0 h-auto -ml-[35px]"
            alt="Grorapid logo"
          />
        </a>
        <div className="flex flex-row justify-between items-center">
          <nav className="relative w-[606px] mt-0">
            <ul className="flex justify-end items-center my-0 pl-0 list-none">
              <li className="cursor-pointer mb-0 mr-8">
                <a
                  href="#"
                  className="font-medium leading-[1em] text-customBlue2"
                >
                  Home
                </a>
              </li>

              <li
                className="relative cursor-pointer mr-7"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div
                  className="flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  <span>Services</span>
                  <svg
                    className="ml-0.5 w-5 h-5 fill-current"
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

              <li
                className="relative cursor-pointer mr-7"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div
                  className="flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isProductsOpen}
                >
                  <span>Products</span>
                  <svg
                    className="ml-0.5 w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
                {isProductsOpen && (
                  <ul className="absolute left-0 mt-2 w-64 bg-white rounded-md text-left py-2 border-none ">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Services Store</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Design & Development Store</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Grorapid Cold Emailing Suite</a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="cursor-pointer mb-0 mr-8">
                <a href="#">Our Work</a>
              </li>
              <li className="cursor-pointer mb-0 mr-8">
                <a href="#">Insights</a>
              </li>
              <li className="cursor-pointer mb-0 mr-8">
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
          <a href="/">
            <button
              type="button"
              className="px-[29px] py-4 text-white bg-customBlue rounded-[10px] font-medium leading-[1em]  transition-all duration-[250ms] ease-in transform hover:scale-95 hover:shadow-lg hover:bg-customBlue2"
            >
              Get free estimation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
