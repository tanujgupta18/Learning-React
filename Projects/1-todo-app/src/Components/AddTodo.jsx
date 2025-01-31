function AddTodo() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6">
        <input
          type="text"
          placeholder="Enter Todo here"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="col-span-4">
        <input
          type="date"
          id="todoDate"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <button
          type="submit"
          className="w-full px-6 py-2 rounded-lg bg-green-500 text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
