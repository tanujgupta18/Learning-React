import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white p-4 rounded shadow">
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="mb-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello World</p>}
    </div>
  );
};

export default Toggle;
