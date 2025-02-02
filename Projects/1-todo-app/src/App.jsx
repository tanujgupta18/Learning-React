import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [
      ...todoItems,
      { todoInput: itemName, todoDate: itemDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.todoInput !== todoItemName
    );
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container flex justify-center p-4">
      <div className="text-center">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
