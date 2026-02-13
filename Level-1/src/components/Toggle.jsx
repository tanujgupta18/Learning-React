import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center w-72">
        <button
          onClick={() => setShow(!show)}
          className="px-5 py-2 bg-gray-900 text-white rounded-lg 
                     hover:bg-gray-700 transition duration-200"
        >
          {show ? "Hide" : "Show"}
        </button>
        {show && (
          <p className="mt-5 text-gray-700 text-lg font-medium">Hello World</p>
        )}
      </div>
    </div>
  );
};

export default Toggle;
