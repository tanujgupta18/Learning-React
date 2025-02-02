import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDate}`);
    const newTodoItems = [
      ...todoItems,
      { todoInput: itemName, todoDate: itemDate },
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container flex justify-center p-4">
      <div className="text-center">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
