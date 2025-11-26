import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(
    function () {
      console.log("Num val is changing");
    },
    [num]
  );

  useEffect(
    function () {
      console.log("Num2 val is changing");
    },
    [num2]
  );
  return (
    <>
      <div>
        <h2>{num}</h2>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Click Me
        </button>
      </div>
      <div>
        <h2>{num2}</h2>
        <button
          onClick={() => {
            setNum2(num2 + 1);
          }}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default App;
