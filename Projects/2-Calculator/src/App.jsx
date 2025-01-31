import React from "react";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80 flex flex-col justify-between h-[500px]">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Calculator
        </h1>
        <Display />
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default App;
