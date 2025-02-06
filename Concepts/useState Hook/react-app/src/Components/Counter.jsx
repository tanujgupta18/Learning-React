import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto">
      <p className="text-xl font-semibold text-gray-700 mb-4">Count: {count}</p>

      <div className="mb-4">
        <label
          htmlFor="step"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Step:
        </label>
        <input
          id="step"
          type="text"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2 w-24 text-center"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + step)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - step)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
