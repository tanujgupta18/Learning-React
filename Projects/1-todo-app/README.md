# Todo App

## Overview

This Todo app is built using **React**. It allows users to add, view, and delete todo items, each with a name and a due date. The app is simple, easy to understand, and is structured using React’s functional components and hooks.

## Project Structure

The app is divided into the following main components:

1. **App.jsx**
2. **AddTodo.jsx**
3. **TodoItems.jsx**
4. **TodoItem.jsx**
5. **WelcomeMessage.jsx**
6. **AppName.jsx**

Each component plays a specific role in the application.

---

## How the App Works

### 1. **App.jsx**

This is the root component of your application. It is responsible for:

- **Managing the state** of the todo list using the `useState` hook.
- **Passing state and handlers** (functions to add and delete todos) down to child components via props.

**Key Code in `App.jsx`:**

```js
const [todoItems, setTodoItems] = useState([]);
```

Here, `useState([])` initializes `todoItems` as an empty array. This state will hold the list of todo items.

Two handler functions are defined:

- **handleNewItem**: This function is responsible for adding a new todo to the list. It accepts two arguments (`itemName` and `itemDate`), which are the name and due date of the todo item. It adds the new todo to the `todoItems` array using the spread operator (`...todoItems`).

```js
const handleNewItem = (itemName, itemDate) => {
  const newTodoItems = [
    ...todoItems,
    { todoInput: itemName, todoDate: itemDate },
  ];
  setTodoItems(newTodoItems);
};
```

- **handleDeleteItem**: This function removes a todo item by its name. It filters out the item from the `todoItems` array and updates the state.

```js
const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter(
    (item) => item.todoInput !== todoItemName
  );
  setTodoItems(newTodoItems);
};
```

Finally, in the `return` statement, you render the following components:

- **AppName**: Displays the app's name.
- **AddTodo**: Contains the form for adding new todos.
- **TodoItems**: Displays the list of todo items.
- **WelcomeMessage**: Displays a message if there are no todos.

```js
<AppName />
<AddTodo onNewItem={handleNewItem} />
{todoItems.length === 0 && <WelcomeMessage />}
<TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
```

---

### 2. **AddTodo.jsx**

This component displays the form where users can enter a new todo item.

**Key Functions in `AddTodo.jsx`:**

- `useState("")`: Initializes `todoName` and `dueDate` as empty strings. These will hold the values of the user input.
- `handleNameChange`: Updates the `todoName` state as the user types in the input field.
- `handleDateChange`: Updates the `dueDate` state as the user selects a date.
- `handleAddButtonClicked`: This function is triggered when the "Add" button is clicked. It checks if both `todoName` and `dueDate` are filled out. If not, an alert is shown to prompt the user to complete the form. If both fields are filled, the `onNewItem` function (which is passed as a prop from `App.jsx`) is called to add the new todo item to the list.

**JSX Rendering**:

- A form with two input fields: one for the todo name and another for the due date.
- A submit button that triggers `handleAddButtonClicked`.

```js
<input type="text" value={todoName} onChange={handleNameChange} />
<input type="date" value={dueDate} onChange={handleDateChange} />
<button onClick={handleAddButtonClicked}>Add</button>
```

---

### 3. **TodoItems.jsx**

This component is responsible for rendering the list of todos.

**Key Code in `TodoItems.jsx`:**

- **`todoItems.map()`**: Iterates through the `todoItems` array (passed as a prop) and renders a `TodoItem` component for each item in the array.
- **onDeleteClick**: The `handleDeleteItem` function (passed down from `App.jsx`) is passed as a prop to the `TodoItem` component. It will be triggered when the delete button is clicked for a particular todo item.

```js
{
  todoItems.map((item, index) => (
    <TodoItem
      key={item.id || index}
      todoInput={item.todoInput}
      todoDate={item.todoDate}
      onDeleteClick={onDeleteClick}
    />
  ));
}
```

This code ensures that every todo item in the list is rendered correctly and provides the functionality to delete each item.

---

### 4. **TodoItem.jsx**

This component represents an individual todo item and provides the delete functionality.

**Key Code in `TodoItem.jsx`:**

- It receives the `todoInput`, `todoDate`, and `onDeleteClick` props.
- **onDeleteClick**: This function is triggered when the "Delete" button is clicked. It calls the `onDeleteClick` function passed from the parent (`App.jsx`), passing the `todoInput` (name) as an argument to identify which todo item to delete.

```js
<button onClick={() => onDeleteClick(todoInput)}>Delete</button>
```

---

### 5. **WelcomeMessage.jsx**

This component displays a message when there are no todo items in the list. It's rendered conditionally in `App.jsx` when `todoItems.length === 0`.

```js
{
  todoItems.length === 0 && <WelcomeMessage />;
}
```

It shows a friendly, encouraging message such as "Enjoy Your Day!" to welcome the user.

---

### 6. **AppName.jsx**

This component simply displays the name of the app ("Todo App"). It’s rendered at the top of the page to give users a clear idea of what the app is about.

```js
<h1 className="text-4xl font-semibold mb-4 drop-shadow-lg">Todo App</h1>
```

---

## Key Concepts and React Features Used

1. **Functional Components**: All components in this app are functional components (not class-based components), which are simpler and more concise.

2. **State Management**:

   - **useState** is used in `App.jsx` to manage the todo list state (`todoItems`), as well as in `AddTodo.jsx` to manage the user input for the todo name and due date.
   - The state is updated in response to user interactions (like adding or deleting todos).

3. **Props**:

   - Data is passed between components using props. For example, `todoItems` is passed from `App.jsx` to `TodoItems.jsx`, and the `onDeleteClick` function is passed down to the `TodoItem` components.

4. **Event Handling**:

   - `onChange` and `onClick` event handlers are used to capture user input (text or date) and trigger actions (such as adding or deleting todos).

5. **Conditional Rendering**:
   - The `WelcomeMessage` is conditionally rendered based on whether the `todoItems` array is empty or not (`todoItems.length === 0`).

---

## Conclusion

This Todo app demonstrates the power of **React hooks**, **functional components**, and **state management**. The components are well-structured, with each component handling a specific responsibility, such as adding, displaying, and deleting todos. The app is simple but functional and can be expanded with additional features (e.g., editing todos, saving to local storage, etc.) as needed.
