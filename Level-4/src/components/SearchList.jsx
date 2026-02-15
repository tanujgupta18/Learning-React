import React, { useState } from "react";

const SearchList = () => {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

  const filteredItems = search
    ? items.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    : items;

  return (
    <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-80 p-6 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Search Fruits
        </h1>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {filteredItems.length === 0 && (
          <p className="text-gray-400 text-sm text-center">No results found</p>
        )}

        <div className="space-y-2">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 px-3 py-2 rounded-lg border border-gray-200"
            >
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchList;
