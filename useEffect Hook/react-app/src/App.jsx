import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered!");
  }); // Runs Every time

  useEffect(() => {
    console.log("welcome to my page");
  }, []); // Runs only once

  useEffect(() => {
    console.log("Count button clicked");
  }, [count]); // Runs only when `count` state changes

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
