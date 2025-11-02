import { useState } from "react";

function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper p-4 max-w-4xl mx-auto">
      <div className="heading flex space-x-4 border-b-2 pb-2 mb-4">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item cursor-pointer py-2 px-4 text-lg font-semibold ${
              currentTabIndex === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-700"
            }`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content text-lg p-4 border rounded-lg bg-gray-100">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
