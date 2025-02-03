import { useState } from "react";
import Counter from "./Components/Counter";
import UserProfile from "./Components/UserProfile";
import ToggleText from "./Components/ToggleText";
import ColorChanger from "./Components/ColorChanger";
import DarkModeToggle from "./Components/DarkModeToggle";
import LikeButton from "./Components/LikeButton";

function App() {
  const [foodItems, setFoodItems] = useState([
    "Dal",
    "Vegetable",
    "Roti",
    "Salad",
    "Milk",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddFood = () => {
    if (inputValue.trim()) {
      setFoodItems([...foodItems, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="m-10">
      {/* <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Healthy Food</h1>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Enter Food Item here"
            className="border p-2 rounded w-full"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            onClick={handleAddFood}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {foodItems.length === 0 ? (
          <h3 className="text-xl text-red-500 text-center">
            I am Still hungry
          </h3>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {foodItems.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div> */}
      {/* <Counter /> */}
      {/* <UserProfile /> */}
      {/* <ToggleText /> */}
      {/* <ColorChanger /> */}
      {/* <DarkModeToggle /> */}
      <LikeButton />
    </div>
  );
}

export default App;
