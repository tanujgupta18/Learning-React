import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-semibold">I am a navbar</div>
      <div className="text-lg">
        Counter is: <span className="font-bold">{count}</span>
      </div>
    </div>
  );
};

export default Navbar;
