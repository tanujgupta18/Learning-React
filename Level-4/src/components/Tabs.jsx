import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="min-h-[60vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Tabs Component
        </h1>

        <div className="flex justify-between mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`flex-1 py-2 text-sm font-medium transition
              ${
                activeTab === "tab1"
                  ? "border-b-2 border-gray-900 text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            Tab 1
          </button>

          <button
            onClick={() => setActiveTab("tab2")}
            className={`flex-1 py-2 text-sm font-medium transition
              ${
                activeTab === "tab2"
                  ? "border-b-2 border-gray-900 text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            Tab 2
          </button>

          <button
            onClick={() => setActiveTab("tab3")}
            className={`flex-1 py-2 text-sm font-medium transition
              ${
                activeTab === "tab3"
                  ? "border-b-2 border-gray-900 text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            Tab 3
          </button>
        </div>

        <div className="text-gray-700 text-sm">
          {activeTab === "tab1" && <p>Content 1</p>}
          {activeTab === "tab2" && <p>Content 2</p>}
          {activeTab === "tab3" && <p>Content 3</p>}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
