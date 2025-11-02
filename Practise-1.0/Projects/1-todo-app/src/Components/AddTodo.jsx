import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (!todoName || !dueDate) {
      alert("Please fill out both fields!");
      return;
    }
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="grid grid-cols-12 gap-4 mb-4">
      <div className="col-span-6">
        <input
          type="text"
          placeholder="Enter Todo here"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-span-4">
        <input
          type="date"
          id="todoDate"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={dueDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <button
          type="submit"
          className="w-full px-6 py-2 rounded-lg bg-green-500 text-white"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
