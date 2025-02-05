import { useRef, useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    refCount.current += 1;
    console.log("Button Clicked: ", refCount.current);
  };
  return (
    <div>
      <h2>State Count: {count}</h2>
      <h2>Ref Count: {refCount.current}</h2>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default ClickCounter;
