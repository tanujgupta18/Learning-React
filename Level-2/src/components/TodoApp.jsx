import React, { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodoList((prev) => [...prev, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-96 p-8 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Todo Application
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter a task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg 
                       hover:bg-gray-700 transition duration-200"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {todoList.length === 0 && (
            <p className="text-gray-400 text-sm text-center">
              No tasks added yet
            </p>
          )}

          {todoList.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 
                         px-4 py-2 rounded-lg border border-gray-200"
            >
              <p className="text-gray-700 text-sm">{item}</p>
              <button
                onClick={() => deleteTodo(index)}
                className="text-sm px-3 py-1 rounded-md bg-gray-200 
                           hover:bg-gray-300 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
