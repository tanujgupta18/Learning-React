import React from "react";
import MenuList from "./components/MenuList";

function App({ menus = [] }) {
  return (
    <div className="flex">
      <div className="bg-blue-900 text-white w-64 min-h-screen p-4 fixed">
        <h1 className="text-xl font-bold mb-4">Recursive Navigation</h1>
        <MenuList list={menus} />
      </div>

      <div className="flex-1 bg-white min-h-screen p-6 ml-64">
        <h2 className="text-gray-800 text-2xl font-semibold">
          Welcome to the Page
        </h2>
        <p className="text-gray-600 mt-2">
          This is your main content area. The sidebar contains the navigation
          menu.
        </p>
      </div>
    </div>
  );
}

export default App;
