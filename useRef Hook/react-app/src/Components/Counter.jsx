import React, { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  const increment = () => {
    setCount(count + 1); // Causes re-render
    refCount.current += 1; // Does NOT cause re-render
    console.log("Ref Count:", refCount.current);
  };

  return (
    <div>
      <h2>State Count: {count}</h2>
      <h2>Ref Count: {refCount.current}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
