import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoInput={item.todoInput} todoDate={item.todoDate} />
      ))}
    </div>
  );
};

export default TodoItems;
