import { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md max-w-sm mx-auto">
      {isVisible && (
        <p className="text-lg text-gray-700 mb-4">This is some text!</p>
      )}

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isVisible ? "Hide" : "Show"} Text
      </button>
    </div>
  );
};

export default ToggleText;
