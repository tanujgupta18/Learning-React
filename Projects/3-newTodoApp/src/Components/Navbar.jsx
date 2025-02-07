import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-violet-800 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer relative overflow-hidden">
          <span className="transition-all transform hover:scale-110 hover:text-violet-300">
            Home
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-violet-300 scale-x-0 transform transition-all group-hover:scale-x-100"></div>
        </li>
        <li className="cursor-pointer relative overflow-hidden">
          <span className="transition-all transform hover:scale-110 hover:text-violet-300">
            Your Tasks
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-violet-300 scale-x-0 transform transition-all group-hover:scale-x-100"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
