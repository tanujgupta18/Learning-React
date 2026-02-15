import React, { useState } from "react";

const Accordian = () => {
  const items = [
    { id: 1, title: "What is React?", content: "React is a JS library." },
    { id: 2, title: "What is useState?", content: "It manages state." },
    { id: 3, title: "What is JSX?", content: "JSX is JS + XML." },
  ];

  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-[60vh] bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Accordion
        </h1>

        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex justify-between items-center px-4 py-3
                           bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-sm font-medium text-gray-700">
                  {item.title}
                </span>
                <span className="text-lg font-semibold text-gray-600">
                  {openId === item.id ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              {openId === item.id && (
                <div className="px-4 py-3 bg-white border-t border-gray-200">
                  <p className="text-sm text-gray-600">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
