import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("");

  return (
    <div className={`p-6 ${color ? `bg-${color}-500` : "bg-gray-200"}`}>
      <div className="space-x-4">
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
