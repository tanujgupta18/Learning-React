import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncreaseCounter = () => {
    setCount((prev) => prev + 1);
  };

  const DecreaseCounter = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="h-[60vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-10 w-80 text-center border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Counter</h1>

        <h2 className="text-5xl font-bold text-gray-900 mb-8">{count}</h2>

        <div className="flex justify-center gap-5">
          <button
            onClick={DecreaseCounter}
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 
                       hover:bg-gray-300 transition duration-200"
          >
            −
          </button>
          <button
            onClick={IncreaseCounter}
            className="px-6 py-2 rounded-lg bg-gray-900 text-white 
                       hover:bg-gray-700 transition duration-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
