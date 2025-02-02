function TodoItem({ todoInput, todoDate, onDeleteClick }) {
  return (
    <div className="grid grid-cols-10 gap-4 items-center py-2">
      <div className="col-span-4 text-gray-700">{todoInput}</div>
      <div className="col-span-4 text-gray-600">{todoDate}</div>
      <div className="col-span-2 flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          onClick={() => {
            onDeleteClick(todoInput);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
