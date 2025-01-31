import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      todoInput: "Learn Everyday",
      todoDate: "31/01/2025",
    },
    {
      todoInput: "Go to College",
      todoDate: "31/01/2025",
    },
    {
      todoInput: "Complete Assignments",
      todoDate: "01/02/2025",
    },
  ];
  return (
    <center className="todo-container flex justify-center p-4">
      <div className="text-center">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
