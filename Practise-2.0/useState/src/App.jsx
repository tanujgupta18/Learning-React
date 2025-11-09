import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const [num, setNum] = useState({ user: "Rahul", age: 20 });

  return (
    <div>
      <h2>Value of Counter is {count}</h2>
      <div className="actions">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
      <h2>
        {num.user}, {num.age}
      </h2>
      <button onClick={() => setNum((prev) => ({ ...prev, age: 34 }))}>
        Update
      </button>
    </div>
  );
};

export default App;
