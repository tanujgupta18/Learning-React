import { useRef, useState } from "react";

const PreviousValueTracker = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  const increment = () => {
    // Set prevCount to current count before incrementing
    prevCount.current = count;

    // Increment the count state
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Prev Count: {prevCount.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default PreviousValueTracker;
