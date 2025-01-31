import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";

function App() {
  return (
    <center className="todo-container flex justify-center p-4">
      <div className="text-center">
        <AppName />
        <AddTodo />
        <TodoItem />
      </div>
    </center>
  );
}

export default App;
